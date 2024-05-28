const express = require("express");
const router = express.Router();
const {verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { generateImage, generateText} = require("../controllers/openai")

//CREATE
router.post("/generateImage", verifyTokenAndAdmin ,generateImage)

router.post("/generateText", verifyTokenAndAdmin ,generateText)

module.exports = router;