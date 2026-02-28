const FoodLog = require("../models/FoodLog");

exports.addFood = async (req, res) => {
  const food = await FoodLog.create({
    user: req.user,
    ...req.body,
  });
  res.json(food);
};

exports.getFood = async (req, res) => {
  const data = await FoodLog.find({ user: req.user });
  res.json(data);
};