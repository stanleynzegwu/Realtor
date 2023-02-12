const express = require("express");
const router = express.Router();
const { sendSubsciptionMail, sendBulkSubsciptionMail, sendRequestReplyMail } = require("../controllers/nodemailer")

//SEND MAIL ONCE SUBSCRIBED
router.post("/" ,sendSubsciptionMail)

//SEND BULK MAIL TO SUBSCRIBERS
router.post("/sendBulk",sendBulkSubsciptionMail)

//SEND REQUEST REPLY MAIL
router.post("/sendRequestReply",sendRequestReplyMail)


module.exports = router;