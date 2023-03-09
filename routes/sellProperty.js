const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , deletePropertyRequest , getSingleProperty , getAllProperty} = require("../controllers/sellProperty")


//CREATE
router.post("/", create)

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deletePropertyRequest);

//GET A Property
router.get("/find/:id", getSingleProperty);

//GET ALL SellProperty Request
router.get("/",verifyTokenAndAdmin, getAllProperty);

module.exports = router;