import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ToolsPage from "./ToolsPage";

export default function Form({ actionType, toolName, handleClose }) {
  const navigate = useNavigate();
  const [formdetails, setFormDetails] = useState([]);
  const [submitButton, setSubmitButton] = useState(false);
  const [otpSection, setOtpSection] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpButton, setOtpButton] = useState(true);
  const [otpText, setOtpText] = useState("");

  const API_URI = "https://superstarretailer.com";
  const status = "loggedin";

  const [formdetail, setFormDetail] = useState({
    name: "",
    email: "",
    phonenumber: "",
    otp: "",
  });

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormDetail((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    // Clear OTP text if any input changes
    setOtpText("");
  };

  const getOtp = async () => {
    if (formdetail.phonenumber) {
      try {
        const response = await axios.post(`${API_URI}/v1/api/generate-otp`, {
          name: formdetail.name,
          mobileNumber: "+91" + formdetail.phonenumber,
        });
        console.log(response);
        setOtpSection(true); // Show OTP section after OTP generation
        setOtpText("OTP Sent. Please check your phone.");
      } catch (error) {
        console.error("Failed to generate OTP:", error);
        setOtpText("Failed to send OTP. Try again.");
      }
    } else {
      setOtpText("Please enter a valid phone number.");
    }
  };

  const verifyOtp = async () => {
    if (formdetail.otp) {
      try {
        const response = await axios.post(`${API_URI}/v1/api/verify-otp`, {
          otp: formdetail.otp,
        });
        if (response.status === 200) {
          setOtpVerified(true);
          setSubmitButton(true);
          setOtpText("OTP Verified");
          setOtpButton(false);
        } else {
          setOtpText("Incorrect OTP. Please try again.");
        }
      } catch (error) {
        console.error("Failed to verify OTP:", error);
        setOtpText("Failed to verify OTP. Please try again.");
      }
    } else {
      setOtpText("Please enter the OTP.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpVerified) {
      try {
        console.log("formTitle", actionType, "reason", toolName);
        const response = await axios.post(`${API_URI}/v1/api/send-whatsapp`, {
          name: formdetail.name,
          mobileNumber: "+91" + formdetail.phonenumber,
          reason: toolName, // Use the correct naming here
          formTitle: actionType, // Use the correct naming here
        });
        console.log(response);
        setFormDetails((prevArray) => [...prevArray, formdetail]);
        setOtpText("Form submitted successfully.");
        // setFormDetail({ name: "", email: "", phonenumber: "", otp: "" });
        // navigate("/thankspage");

        handleClose();

        setTimeout(() => {
          localStorage.setItem("Status", status);
        });
      } catch (error) {
        console.error("Failed to submit the form:", error);
        setOtpText("Form submission failed. Try again.");
      }
    } else {
      setOtpText("Please verify the OTP before submitting.");
    }
  };

  return (
    <>
      {" "}
      <div className="formmaindivflex">
        <form>
          <div>
            <div className="coummintyformlabel">Name</div>
            <input
              onChange={handleChange}
              className="communityinputboxes"
              type="text"
              name="name"
              value={formdetail.name}
              required
            />
          </div>
          <div className="coummintyformdiv">
            <div className="coummintyformlabel">Mail Id</div>
            <input
              onChange={handleChange}
              name="email"
              className="communityinputboxes1"
              type="email"
              value={formdetail.email}
              required
            />
          </div>
          <div className="coummintyformdiv">
            <div className="coummintyformlabel">Mobile Number</div>
            <input
              minLength={10}
              maxLength={10}
              onChange={handleChange}
              name="phonenumber"
              className="communityinputboxes2"
              type="text"
              value={formdetail.phonenumber}
              required
            />
            <button
              type="button"
              onClick={getOtp}
              className="getotpbuttonstyle"
              disabled={!formdetail.phonenumber}
            >
              Get OTP
            </button>
          </div>

          {otpSection && (
            <div>
              <div className="coummintyformdiv">
                <div className="coummintyformlabel">OTP</div>
                <input
                  value={formdetail.otp}
                  onChange={handleChange}
                  name="otp"
                  className="communityinputboxes1"
                  type="text"
                  required
                />
                {otpText && <div className="otpverfiedText">{otpText}</div>}
              </div>

              {otpButton && (
                <div className="buttonclasssflex">
                  <button
                    type="button"
                    className="VerifyOTP"
                    onClick={verifyOtp}
                  >
                    Verify OTP
                  </button>
                </div>
              )}

              {submitButton && (
                <div className="buttonclasssflex">
                  <button
                    type="submit"
                    className="submitButton"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
      <div style={{ display: "none" }}>
        <ToolsPage />
      </div>
    </>
  );
}
