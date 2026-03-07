const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addSleep, getSleep } = require("../controllers/trackingController");

router.post("/", auth, addSleep);
router.get("/", auth, getSleep);

module.exports = router;
