const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true }, // Format: YYYY-MM-DD or similar
    timestamp: { type: String }, // For specific log entry time
  },
  { timestamps: true }
);

module.exports = mongoose.model("Water", waterSchema);