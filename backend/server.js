const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tracking", require("./routes/trackingRoutes"));
app.use("/api/diet", require("./routes/dietRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/health_form", require("./routes/healthRoutes"));
app.use("/predict", require("./routes/predictRoutes"));

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});