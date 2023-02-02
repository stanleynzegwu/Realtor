const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create, getAllPainterRequest } = require("../controllers/hirePainter")


//CREATE
router.post("/", create)

//GET ALL PAINTER REQUEST
router.get("/", getAllPainterRequest);

module.exports = router;