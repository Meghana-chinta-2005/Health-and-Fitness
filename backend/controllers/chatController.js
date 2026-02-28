const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  const msg = await Message.create({
    user: req.user,
    message: req.body.message,
  });
  res.json(msg);
};

exports.getMessages = async (req, res) => {
  const messages = await Message.find().populate("user", "name");
  res.json(messages);
};