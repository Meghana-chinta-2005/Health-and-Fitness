const Water = require("../models/Water");
const Sleep = require("../models/Sleep");
const Calories = require("../models/Calories");

exports.addWater = async (req, res) => {
  try {
    const water = await Water.create({
      user: req.user,
      ...req.body
    });
    res.status(201).json(water);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWater = async (req, res) => {
  try {
    const today = new Date().toLocaleDateString();
    const data = await Water.find({
      user: req.user,
      date: req.query.date || today
    }).sort({ createdAt: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSleep = async (req, res) => {
  try {
    const sleep = await Sleep.create({
      user: req.user,
      ...req.body
    });
    res.status(201).json(sleep);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSleep = async (req, res) => {
  try {
    const data = await Sleep.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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