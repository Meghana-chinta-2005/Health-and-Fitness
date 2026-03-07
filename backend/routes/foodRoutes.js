const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addFood, getFood } = require("../controllers/dietController");

router.post("/", auth, addFood);
router.get("/", auth, getFood);

module.exports = router;
