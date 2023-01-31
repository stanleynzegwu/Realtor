const express = require("express");
const router = express.Router();
const { verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create } = require("../controllers/hirePainter")


//CREATE
router.post("/", create)

// //UPDATE
// router.put("/:id", verifyTokenAndAdmin, updateProperty);

// //DELETE
// router.delete("/:id", verifyTokenAndAdmin, deleteProperty);

// //GET A Property
// router.get("/find/:id", getSingleProperty);

// //GET ALL Property
// router.get("/", getAllProperty);

module.exports = router;