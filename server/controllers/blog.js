const Blog = require('../models/Blog')

const create = async (req,res) => {
    const newBlog = new Blog(req.body)

    try{
        const savedBlog = await newBlog.save()
        return res.status(200).json(savedBlog)

    }catch(err){
        return res.status(500).json(err)
    }
}

//UPDATE

const updateBlog = async (req, res) => {

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedBlog);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//DELETE

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET Blog

const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL Blog

const getAllBlog = async (req, res) => {
  const qNew = req.query.new;
  try {
    let blog;

    if (qNew) {
      blog = await Blog.find().sort({ createdAt: -1 }).limit(3);
    }else {
      blog = await Blog.find().sort({createdAt: -1});
    }

    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  getAllBlog
}