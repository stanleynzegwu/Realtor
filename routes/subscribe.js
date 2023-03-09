const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateSubscription , deleteSubscription , getAllSubscription} = require("../controllers/subscribe")

//CREATE
router.post("/", create)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateSubscription);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteSubscription);


//GET ALL SUBSCRIPTION
router.get("/", verifyTokenAndAdmin, getAllSubscription);

module.exports = router;