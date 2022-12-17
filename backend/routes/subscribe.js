const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create } = require("../controllers/subscribe")

//CREATE
router.post("/", create)

//UPDATE
// router.put("/:id", verifyTokenAndAdmin, updateReview);

// //DELETE
// router.delete("/:id", verifyTokenAndAdmin, deleteReview);

// //GET A PROPERTY
// router.get("/find/:id", getSingleReview);

// //GET ALL PROPERTIES
// router.get("/", getAllReviews);

module.exports = router;