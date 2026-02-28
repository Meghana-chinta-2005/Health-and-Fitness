const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { saveHealthForm, getHealthForm } = require("../controllers/healthController");

router.post("/health_form", auth, saveHealthForm);
router.get("/health_form/:userId", auth, getHealthForm);

module.exports = router;
