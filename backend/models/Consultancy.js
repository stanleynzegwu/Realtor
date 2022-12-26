const mongoose = require("mongoose");

const ConsultancySchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    useremail: { type: String, required: true },
    propertyId: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    consultancyFee: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Consultancy",  ConsultancySchema);