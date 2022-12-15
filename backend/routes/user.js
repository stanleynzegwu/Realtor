const express = require("express");
const router = express.Router();

//Main Routes - simplified for now
router.get("/", (req,res) => {
    res.status(200).json('ok it went well')
});

module.exports = router;