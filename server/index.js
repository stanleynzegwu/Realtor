const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const userRoutes = require("./routes/user");
const adminMessageRoutes = require("./routes/adminMessage");
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
const buildingRoutes = require("./routes/building");
const buyPropertyRoutes = require("./routes/buyProperty");
const consultancyRoutes = require("./routes/consultancy");
const contactRoutes = require("./routes/contact");
const hirePainterRoutes = require("./routes/hirePainter");
const nodemailerRoutes = require("./routes/nodemailer");
const offerRoutes = require("./routes/offer");
const openaiRoutes = require("./routes/openai");
const propertyRoutes = require("./routes/property");
const reviewRoutes = require("./routes/review");
const sellPropertyRoutes = require("./routes/sellProperty");
const subscribeRoutes = require("./routes/subscribe");

// app.use(cors())
app.use(cors({
      origin: ["https://realsplash.vercel.app"],
      methods: ["POST", "GET", "DELETE", "UPDATE", "PUT"],
      credentials: true
}));

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });
//Connect To Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Realsplash!'
  })
})

app.use("/api/users", userRoutes);
app.use("/api/adminMessage", adminMessageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/building", buildingRoutes);
app.use("/api/buyProperty", buyPropertyRoutes);
app.use("/api/consultancy", consultancyRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/hirePainter", hirePainterRoutes);
app.use("/api/nodemailer", nodemailerRoutes);
app.use("/api/offer", offerRoutes);
app.use("/api/openai", openaiRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/sellProperty", sellPropertyRoutes);
app.use("/api/subscribe", subscribeRoutes);

//to serve the frontend
// app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get("*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "./frontend/build/index.html"),
//     function (err) {
//       //res.status(500).send(err);
//       res.status(500).json(err);
//     }
//   );
// });

//Server Running
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running, you better catch it!");
});