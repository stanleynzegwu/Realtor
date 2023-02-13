const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middleware/verifyToken")
const { create, deleteBuyPropertyRequest , getAllBuyPropertyRequest } = require("../controllers/buyProperty")

//CREATE
router.post("/", create)

//GET ALL BUY PROPERTY REQUEST
router.get("/",verifyTokenAndAdmin, getAllBuyPropertyRequest);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteBuyPropertyRequest);

module.exports = router;