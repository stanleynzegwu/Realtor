const express = require("express");
const router = express.Router();
const { sendSubsciptionMail } = require("../controllers/nodemailer")

//CREATE
router.post("/" ,sendSubsciptionMail)

module.exports = router;