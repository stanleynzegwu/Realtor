const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middleware/verifyToken")
const { create , deleteContactMessage, getSingleContactMessage , getAllContactMessages} = require("../controllers/contact")

//CREATE
router.post("/", create)

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteContactMessage);

//GET A Contact Message
router.get("/find/:id", verifyTokenAndAdmin, getSingleContactMessage);

//GET ALL Contact Messages
router.get("/", verifyTokenAndAdmin, getAllContactMessages);

module.exports = router;