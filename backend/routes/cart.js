const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateCart , deleteCart, getUserCart , getAllCart} = require("../controllers/cart")

//CREATE
router.post("/", verifyToken ,create)

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

//GET USER CART
router.get("/find/:id",verifyTokenAndAuthorization, getUserCart);

//GET ALL CART
router.get("/", verifyTokenAndAdmin, getAllCart);

module.exports = router;