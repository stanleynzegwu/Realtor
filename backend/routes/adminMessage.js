const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middleware/verifyToken")
const { create, getAllAdminMessages, deleteAdminMessage} = require("../controllers/adminMessage")

//CREATE
router.post("/", verifyTokenAndAdmin ,create)

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteAdminMessage);

//GET ALL Admin Messages
router.get("/", verifyTokenAndAdmin, getAllAdminMessages);

module.exports = router;