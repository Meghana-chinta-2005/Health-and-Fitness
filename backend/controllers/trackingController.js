const Water = require("../models/Water");
const Sleep = require("../models/Sleep");
const Calories = require("../models/Calories");

exports.addWater = async (req, res) => {
  const water = await Water.create({
    user: req.user,
    amount: req.body.amount,
  });
  res.json(water);
};

exports.getWater = async (req, res) => {
  const data = await Water.find({ user: req.user });
  res.json(data);
};

exports.addSleep = async (req, res) => {
  const sleep = await Sleep.create({
    user: req.user,
    hours: req.body.hours,
  });
  res.json(sleep);
};

exports.getSleep = async (req, res) => {
  const data = await Sleep.find({ user: req.user });
  res.json(data);
};

exports.addCalories = async (req, res) => {
  const calories = await Calories.create({
    user: req.user,
    calories: req.body.calories,
  });
  res.json(calories);
};

exports.getCalories = async (req, res) => {
  const data = await Calories.find({ user: req.user });
  res.json(data);
};