const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middleware/verifyToken")
const { create, getAllPainterRequest, deleteHirePainterRequest } = require("../controllers/hirePainter")


//CREATE
router.post("/", create)

//GET ALL PAINTER REQUEST
router.get("/",verifyTokenAndAdmin, getAllPainterRequest);

//DELETE
router.delete("/:id",verifyTokenAndAdmin, deleteHirePainterRequest)

module.exports = router;