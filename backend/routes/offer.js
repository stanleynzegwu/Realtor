const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateOffer , deleteOffer , getSingleOffer , getAllOffers} = require("../controllers/offer")

//CREATE
router.post("/", verifyTokenAndAdmin ,create)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOffer);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOffer);

//GET A Offer
router.get("/find/:id", getSingleOffer);

//GET ALL Offers
router.get("/", getAllOffers);

module.exports = router;