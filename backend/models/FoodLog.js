const mongoose = require("mongoose");

const foodLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    foodName: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("FoodLog", foodLogSchema);