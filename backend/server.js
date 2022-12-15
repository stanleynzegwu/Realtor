const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const userRoutes = require("./routes/user");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);

//Server Running
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running, you better catch it!");
});