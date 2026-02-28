const mongoose = require("mongoose");

const caloriesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    calories: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Calories", caloriesSchema);