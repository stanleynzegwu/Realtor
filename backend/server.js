const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const buildingRoutes = require("./routes/building");
const propertyRoutes = require("./routes/property");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/building", buildingRoutes);
app.use("/api/property", propertyRoutes);

//Server Running
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running, you better catch it!");
});