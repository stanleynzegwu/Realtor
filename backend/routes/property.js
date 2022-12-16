const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateProperty , deleteProperty , getSingleProperty , getAllProperty} = require("../controllers/property")


//CREATE
router.post("/", verifyTokenAndAdmin ,create)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProperty);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProperty);

//GET A Property
router.get("/find/:id", getSingleProperty);

//GET ALL Property
router.get("/", getAllProperty);

// //GET USER STATS

// router.get("/stats", verifyTokenAndAdmin, getUserStats)

module.exports = router;