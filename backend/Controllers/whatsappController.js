const axios = require("axios");

// Controller for sending the WhatsApp message
exports.sendWhatsApp = async (req, res) => {
  const { mobileNumber, name, reason, formTitle } = req.body; // Destructure from the request body
  console.log(req.body);
  // Define default parameters
  let campaignName;
  let templateParams;
  let attachmenturl;

  // Assign values based on the reason
  switch (formTitle) {
    case "welcome":
      campaignName = "SRH_1st Welcome";
      templateParams = ["Joining SuperStar Retailer Hub", name]; // Adjust as per requirement
      attachmenturl = `https://whatsapp-media-library.s3.ap-south-1.amazonaws.com/IMAGE/6353da2e153a147b991dd812/4958901_highanglekidcheatingschooltestmin.jpg`;
      break;
    case "download":
      campaignName = "Srh2_Downloading";
      templateParams = [
        "Interest Downloading from SuperStar Retailer Hub",
        name,
        reason,
        "Grow",
      ]; // Customize as needed
      attachmenturl = `https://superstarretailer.com/${reason}.xlsx`;
      break;
    // case "otp":
    //   campaignName = "SRH_OTP";
    //   templateParams = ["123456"]; // Assume OTP is generated
    //   break;

    case "DirectDownload":
      return res.status(200).json({ message: "successful" });
    case "story":
      return res.status(200).json({ message: "successful" });
    case "purchase":
      return res.status(200).json({ message: "successful" });
    default:
      return res.status(400).json({ error: "Invalid reason provided" });
  }

  // API body to be sent
  const body = {
    apiKey: process.env.API_KEY, // Replace with actual API key
    campaignName: campaignName,
    destination: mobileNumber,
    userName: "GROWTHRANJITH.COM",
    templateParams: templateParams,
    source: "new-landing-page form",
    media: {
      url: attachmenturl,
      filename: reason,
    },
    buttons: [],
    carouselCards: [],
    location: {},
    paramsFallbackValue: {
      FirstName: name,
    },
  };

  try {
    // Send the request to the external API
    const response = await axios.post(
      "https://backend.api-wa.co/campaign/engagebird.com/api/v2",
      body
    );

    // On success, respond back to the client
    return res.status(200).json({
      message: "WhatsApp message sent successfully",
      data: response.data,
    });
  } catch (error) {
    // Error handling
    console.error(
      "Error sending WhatsApp message:",
      error.response ? error.response.data : error.message
    );
    return res.status(500).json({ error: "Failed to send WhatsApp message" });
  }
};
