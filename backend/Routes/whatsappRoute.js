const express = require("express");
const router = express.Router();
const sendwhatsappController = require("../Controllers/whatsappController");

// Define route to send the WhatsApp message
router.post("/send-whatsapp", sendwhatsappController.sendWhatsApp);

module.exports = router;
