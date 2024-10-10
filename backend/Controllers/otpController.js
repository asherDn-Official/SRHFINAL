const jwt = require("jsonwebtoken");
require("dotenv").config();
const axios = require("axios");

// Helper function to generate a 6-digit OTP
const generate6DigitOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Generate OTP, encrypt with JWT, and save as a cookie
exports.generateOtp = async (req, res) => {
  try {
    const { name, mobileNumber } = req.body;
    //console.log(name, "|||", mobileNumber);
    const otp = generate6DigitOTP();

    // API body to be sent
    const body = {
      apiKey: process.env.API_KEY, // Move API key to environment variables for security
      campaignName: "SRH_OTP",
      destination: mobileNumber,
      userName: "GROWTHRANJITH.COM",
      templateParams: [otp],
      source: "new-landing-page form",

      buttons: [
        {
          type: "button",
          sub_type: "url",
          index: 0,
          parameters: [
            {
              type: "text",
              text: otp,
            },
          ],
        },
      ],
      carouselCards: [],
      location: {},
      paramsFallbackValue: {
        FirstName: name,
      },
    };
    //console.log("comes here");

    try {
      const response = await axios.post(
        "https://backend.api-wa.co/campaign/engagebird.com/api/v2",
        body
      );
      //console.log("Response:", response.data); // Log response data
      if (response.status === 200) {
        // Encrypt the OTP using JWT
        //console.log("jwt sign start");

        const token = jwt.sign({ otp }, process.env.JWT, {
          expiresIn: "5m", // OTP valid for 5 minutes
        });
        //console.log("jwt sign ends");
        // Store the encrypted OTP token in a cookie (expires in 5 minutes)
        res
          .cookie("otpToken", token, {
            httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
            maxAge: 5 * 60 * 1000, // Expires in 5 minutes
            //secure: true, // Only set over HTTPS in production
          })
          .status(200)
          .json({
            message: "OTP generated and saved in cookies",
            //otp: otp, // Only for testing purposes, remove in production
          });
      } else {
        console.error("Error:", response.data); // Log the error response
        res
          .status(500)
          .json({ message: "Failed to send OTP. Internal error." });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Error generating OTP",
        error: error.message,
      });
    }
  } catch (error) {
    console.error(
      "Axios Error:",
      error.response ? error.response.data : error.message
    ); // Log specific error details
    res.status(500).json({
      message: "Failed to send OTP. Internal error.",
      error: error.message,
    });
  }
};

// Verify OTP from cookies (decrypting the JWT)
exports.verifyOtp = async (req, res) => {
  try {
    const { otp: providedOtp } = req.body;
    const otpToken = req.cookies.otpToken;

    // Check if OTP token exists in the cookie
    if (!otpToken) {
      return res.status(400).json({
        message:
          "OTP not found in cookies. It may have expired or never been set.",
      });
    }

    // Verify and decrypt the OTP token
    jwt.verify(otpToken, process.env.JWT, (err, decoded) => {
      if (err) {
        return res.status(400).json({
          message: "Invalid or expired OTP token",
          error: err.message,
        });
      }

      const { otp: decryptedOtp } = decoded;

      // Compare the provided OTP with the decrypted OTP
      if (decryptedOtp === providedOtp) {
        // Clear the cookie after successful verification
        res.clearCookie("otpToken");

        return res.status(200).json({
          message: "OTP verified successfully",
          success: true,
        });
      } else {
        return res.status(400).json({
          message: "Invalid OTP",
          success: false,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Error verifying OTP",
      error: error.message,
    });
  }
};
