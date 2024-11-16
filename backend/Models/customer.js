const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    storeName: {
      type: String,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerMobile: {
      type: String,
      required: true,
    },
    usedAction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
