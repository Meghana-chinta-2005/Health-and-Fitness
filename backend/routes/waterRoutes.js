const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addWater, getWater } = require("../controllers/trackingController");

router.post("/", auth, addWater);
router.get("/", auth, getWater);

module.exports = router;
