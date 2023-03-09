const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create,updateUser , deleteUser , getSingleUser , getAllUsers , getUserStats } = require("../controllers/user")

const User = require("../models/User");

//CREATE
router.post("/", verifyTokenAndAdmin ,create)

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//GET A USER
router.get("/find/:id", verifyTokenAndAdmin, getSingleUser);

//GET ALL USER
router.get("/", verifyTokenAndAdmin, getAllUsers);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, getUserStats)

module.exports = router;