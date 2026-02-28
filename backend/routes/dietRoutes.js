const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addFood, getFood } = require("../controllers/dietController");

router.post("/foodlog", auth, addFood);
router.get("/foodlog", auth, getFood);

module.exports = router;