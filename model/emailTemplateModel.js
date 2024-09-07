// src/models/emailTemplate.model.js
const mongoose = require("mongoose");

const emailTemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("EmailTemplate", emailTemplateSchema);
