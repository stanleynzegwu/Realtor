const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middleware/verifyToken")
const { create } = require("../controllers/buyProperty")

//CREATE
router.post("/", create)

module.exports = router;