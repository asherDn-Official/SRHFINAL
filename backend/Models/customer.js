const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    customerEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    customerMobile: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Please provide a valid 10-digit phone number"],
    },
    usedAction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

module.exports = mongoose.model("Customer", customerSchema);
