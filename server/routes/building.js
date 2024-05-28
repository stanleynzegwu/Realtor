const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateBuilding , deleteBuilding , getSingleBuilding , getAllBuilding} = require("../controllers/building")


//CREATE
router.post("/", verifyTokenAndAdmin ,create)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateBuilding);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteBuilding);

//GET A Building
router.get("/find/:id", getSingleBuilding);

//GET ALL BUILDING
router.get("/", getAllBuilding);

// //GET USER STATS

// router.get("/stats", verifyTokenAndAdmin, getUserStats)

module.exports = router;