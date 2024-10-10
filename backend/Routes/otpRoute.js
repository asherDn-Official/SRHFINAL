const express = require("express");
const router = express.Router();
const otpController = require("../Controllers/otpController");

// Route to generate and store OTP in cookies
router.post("/generate-otp", otpController.generateOtp);

// Route to verify OTP from cookies
router.post("/verify-otp", otpController.verifyOtp);

module.exports = router;
