const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trim();
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};