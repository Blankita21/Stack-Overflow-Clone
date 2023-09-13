if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./routers");

const app = express();
const PORT = process.env.PORT || 80;

db.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  } catch (e) {
    res.send("Welcome to stackoverflow clone");
  }
});

app.listen(PORT, () => {
  console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
});
