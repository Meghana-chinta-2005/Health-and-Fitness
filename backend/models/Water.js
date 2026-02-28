const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Water", waterSchema);