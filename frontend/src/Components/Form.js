import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ToolsPage from "./ToolsPage";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ThankYouPage from "./ThankPage";

export default function Form({ actionType, toolName, handleClose }) {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState([]);
  const [submitButton, setSubmitButton] = useState(false);
  const [otpSection, setOtpSection] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpButton, setOtpButton] = useState(true);
  const [otpText, setOtpText] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const handleCloseS = () => setShow(false);
  const handleShow = () => setShow(true);

  const otpSectionRef = useRef(null);
  const [scrollToOtp, setScrollToOtp] = useState(false);

  const API_URI = "https://superstarretailer.com";
  // const API_URI = "https://superstarretailer.com";

  const status = "loggedin";

  const [thankuPopup, setThankuPopup] = useState(true);
  const lastSectionRef11 = useRef(null);

  const [formDetail, setFormDetail] = useState({
    name: "",
    email: "",
    storeName: "",
    phonenumber: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormDetail((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setOtpText("");
  };
  useEffect(() => {
    if (scrollToOtp && otpSectionRef.current) {
      otpSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToOtp(false); // Reset scroll trigger
    }
  }, [scrollToOtp]);
  const getOtp = async () => {
    if (formDetail.phonenumber) {
      try {
        const response = await axios.post(`${API_URI}/v1/api/generate-otp`, {
          name: formDetail.name,
          mobileNumber: "+91" + formDetail.phonenumber,
        });
        console.log(response);
        setOtpSection(true);
        setOtpText("OTP Sent. Please check your phone.");
        setError(""); // Clear any previous errors
        // handleScrollToOtpSection();
        setScrollToOtp(true);
      } catch (error) {
        console.error("Failed to generate OTP:", error);
        setOtpText("Failed to send OTP. Try again.");
        setError("Error sending OTP. Please try again later.");
      }
    } else {
      setOtpText("Please enter a valid phone number.");
    }
    // scrollToLastSection11();
  };

  const verifyOtp = async () => {
    if (formDetail.otp) {
      try {
        const response = await axios.post(`${API_URI}/v1/api/verify-otp`, {
          otp: formDetail.otp,
        });
        if (response.status === 200) {
          setOtpVerified(true);
          setSubmitButton(true);
          setOtpText("OTP Verified");
          setOtpButton(false);
          setError("");
        } else {
          setOtpText("Incorrect OTP. Please try again.");
          setError("OTP verification failed.");
        }
      } catch (error) {
        console.error("Failed to verify OTP:", error);
        setOtpText("Failed to verify OTP. Please try again.");
        setError("Error during OTP verification. Please try again later.");
      }
    } else {
      setOtpText("Please enter the OTP.");
    }
  };

  console.log(formDetail);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpVerified) {
      try {
        console.log("formTitle", actionType, "reason", toolName);
        const response = await axios.post(`${API_URI}/v1/api/send-whatsapp`, {
          name: formDetail.name,
          mobileNumber: "+91" + formDetail.phonenumber,

          reason: toolName,
          formTitle: actionType,
        });

        if (response.status === 200) {
          await axios.post(`${API_URI}/v1/api/customers`, {
            customerName: formDetail.name,
            customerEmail: formDetail.email,
            storeName: formDetail.storeName,
            customerMobile: "+91" + formDetail.phonenumber,
            usedAction: actionType,
          });
          console.log("actiontype:", actionType);
          console.log("ToolName :", toolName);
          if (actionType === "DirectDownload") {
            const link = `${API_URI}/${toolName}.xlsx`;
            const a = document.createElement("a");
            a.href = link;
            a.download = `${toolName}.xlsx`; // Specify the file name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } else if (actionType === "purchase") {
            const link = `${API_URI}/${toolName}.pdf`;
            const a = document.createElement("a");
            a.href = link;
            a.download = `${toolName}.pdf`; // Specify the file name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } else if (actionType === "DirectDownload1") {
            const link = `${API_URI}/${toolName}.pdf`;
            const a = document.createElement("a");
            a.href = link;
            a.download = `${toolName}.pdf`; // Specify the file name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }

          setFormDetails((prevArray) => [...prevArray, formDetail]);
          setOtpText("Form submitted successfully.");
          setError(""); // Clear any previous errors

          setTimeout(() => {
            localStorage.setItem("Status", status);
          });
          setThankuPopup(false);
          // setTimeout(() => {
          //   handleClose();
          // }, 3000);
        } else {
          setOtpText("Failed to submit form. Please try again.");
          setError("Form submission failed.");
        }
      } catch (error) {
        console.error("Failed to submit the form:", error);
        setOtpText("Form submission failed. Try again.");
        setError("Error submitting form. Please try again later.");
      }
    } else {
      setOtpText("Please verify the OTP before submitting.");
      setError("OTP verification is required before form submission.");
    }
  };

  return (
    <>
      <>
        <div className="formmaindivflex">
          {thankuPopup ? (
            <form onSubmit={handleSubmit}>
              <div>
                <div className="coummintyformlabel">Name</div>
                <input
                  onChange={handleChange}
                  className="communityinputboxes"
                  type="text"
                  name="name"
                  value={formDetail.name}
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
                  value={formDetail.email}
                  required
                />
              </div>
              <div className="coummintyformdiv">
                <div className="coummintyformlabel">Store/Business Name</div>
                <input
                  onChange={handleChange}
                  className="communityinputboxes"
                  type="text"
                  name="storeName"
                  value={formDetail.storeName}
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
                  value={formDetail.phonenumber}
                  required
                />
                <button
                  ref={otpSectionRef}
                  type="button"
                  onClick={getOtp}
                  className="getotpbuttonstyle"
                  disabled={!formDetail.phonenumber}
                >
                  Get OTP
                </button>
              </div>

              {otpSection && (
                <div>
                  <div className="coummintyformdiv">
                    <div className="coummintyformlabel">OTP</div>
                    <input
                      value={formDetail.otp}
                      onChange={handleChange}
                      name="otp"
                      className="communityinputboxes1"
                      type="text"
                      required
                    />
                    {otpText && <div className="otpverfiedText">{otpText}</div>}
                    {error && <div className="errorText">{error}</div>}
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
                      <button type="submit" className="submitButton">
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              )}
            </form>
          ) : (
            <ThankYouPage />
          )}
        </div>
        <div style={{ display: "none" }}>
          <ToolsPage />
        </div>
      </>
    </>
  );
}
