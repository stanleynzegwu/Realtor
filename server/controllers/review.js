const Review = require('../models/Review')
const User = require('../models/User')

//CREATE REVIEW

const create = async (req,res) => {
    const user = await User.findById(req.params.id)
    const {star, review} = req.body
    const newReview = new Review({
        userId: user._id,
        username: user.username,
        useremail: user.email,
        star: star,
        img : user.img,
        review: review
    })
    try{
        const savedReview = await newReview.save()
        return res.status(200).json(savedReview)

    }catch(err){
        return res.status(500).json(err)
    }
}

//UPDATE

const updateReview = async (req, res) => {

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedReview);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//DELETE

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET Review

const getSingleReview = async (req, res) => {
  try {
    const review = await review.findById(req.params.id);
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL REVIEW

const getAllReviews = async (req, res) => {
  const qNew = req.query.new;
  const qFavorite = req.query.favorite
  try {
    let reviews;

    if (qNew) {
        reviews = await Review.find().sort({ createdAt: -1 }).limit(3);
    }else if(qFavorite && !qNew){
        reviews = await Review.find({
         isFavorite:true,
        });
    }else {
        reviews = await Review.find().sort({createdAt:-1});
    }

    return res.status(200).json(reviews);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
  updateReview,
  deleteReview,
  getSingleReview,
  getAllReviews
}