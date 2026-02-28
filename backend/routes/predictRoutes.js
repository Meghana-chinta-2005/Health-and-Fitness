const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { predictDiet, predictExercise } = require("../controllers/predictController");

router.post("/diet", auth, predictDiet);
router.post("/exercise", auth, predictExercise);

module.exports = router;
