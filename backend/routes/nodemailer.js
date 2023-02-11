const express = require("express");
const router = express.Router();
const { sendSubsciptionMail, sendBulkSubsciptionMail } = require("../controllers/nodemailer")

//SEND MAIL ONCE SUBSCRIBED
router.post("/" ,sendSubsciptionMail)

//SEND BULK EMAIL TO SUBSCRIBERS
router.post("/sendBulk",sendBulkSubsciptionMail)


module.exports = router;