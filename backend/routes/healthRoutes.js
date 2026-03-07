const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { saveHealthForm, getHealthForm } = require("../controllers/healthController");

router.post("/", auth, saveHealthForm);
router.get("/:userId", auth, getHealthForm);

module.exports = router;
