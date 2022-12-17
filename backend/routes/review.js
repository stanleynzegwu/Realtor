const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateReview , deleteReview , getSingleReview , getAllReviews} = require("../controllers/review")

//CREATE
router.post("/:id", verifyTokenAndAuthorization ,create)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateReview);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteReview);

//GET A PROPERTY
router.get("/find/:id", getSingleReview);

//GET ALL PROPERTIES
router.get("/", getAllReviews);

module.exports = router;