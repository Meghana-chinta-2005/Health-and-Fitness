const mongoose = require("mongoose");

const sleepSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    hours: { type: Number, required: true },
    quality: { type: Number, min: 1, max: 10 },
    bedTime: { type: String },
    wakeTime: { type: String },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sleep", sleepSchema);