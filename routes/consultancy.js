const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateConsultancy , deleteConsultancy, getUserConsultancy , getAllConsultancy} = require("../controllers/consultancy")

//CREATE
router.post("/:id", verifyToken ,create)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateConsultancy);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteConsultancy);

//GET USER CART
router.get("/find/:id",verifyTokenAndAuthorization, getUserConsultancy);

//GET ALL CART
router.get("/", verifyTokenAndAdmin, getAllConsultancy);

module.exports = router;