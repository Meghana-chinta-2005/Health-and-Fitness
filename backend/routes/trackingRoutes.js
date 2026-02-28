const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  addWater,
  getWater,
  addSleep,
  getSleep,
  addCalories,
  getCalories,
} = require("../controllers/trackingController");

router.post("/water", auth, addWater);
router.get("/water", auth, getWater);

router.post("/sleep", auth, addSleep);
router.get("/sleep", auth, getSleep);

router.post("/calories", auth, addCalories);
router.get("/calories", auth, getCalories);

module.exports = router;