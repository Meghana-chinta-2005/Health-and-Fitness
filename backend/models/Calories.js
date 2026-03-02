const mongoose = require("mongoose");

const caloriesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    calories: { type: Number, required: true },
    foodItem: { type: String },
    mealType: { type: String },
    date: { type: String, required: true },
    timestamp: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Calories", caloriesSchema);