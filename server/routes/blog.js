const express = require("express");
const router = express.Router();
const {verifyTokenAndAdmin} = require("../middleware/verifyToken")
const { create , updateBlog , deleteBlog , getSingleBlog , getAllBlog} = require("../controllers/blog")

//CREATE
router.post("/", verifyTokenAndAdmin ,create)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateBlog);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteBlog);

//GET A BLOG
router.get("/find/:id", getSingleBlog);

//GET ALL BLOG
router.get("/", getAllBlog);

module.exports = router;