const Subscribe = require('../models/Subscribe')
const User = require('../models/User')

//CREATE Subscribe

const create = async (req,res) => {
    const id = req.query.id;
    let newSubscription

    if(id){
        user = await User.findById(id)
        newSubscription = new Subscribe({
            email: user.email
        })
    }else {
        let { email } = req.body
        newSubscription = new Subscribe({
            email: email
        })
    }
    // user = id && await User.findById(id)
    // //const user = await User.findById(req.params.id)
    // //const {star, Subscribe, img} = req.body
    //    newSubscription = new Subscribe({
    //     userEmail: user.email
    // })
    try{
        const savedSubscription = await newSubscription.save()
        res.status(200).json(savedSubscription)

    }catch(err){
        res.status(500).json(err)
    }
}

//UPDATE

// const updateReview = async (req, res) => {

//   try {
//     const updatedReview = await Review.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedReview);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

// //DELETE

// const deleteReview = async (req, res) => {
//   try {
//     await Review.findByIdAndDelete(req.params.id);
//     res.status(200).json("Review has been deleted...");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

// //GET Review

// const getSingleReview = async (req, res) => {
//   try {
//     const review = await review.findById(req.params.id);
//     res.status(200).json(property);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

// //GET ALL REVIEW

// const getAllReviews = async (req, res) => {
//   const qNew = req.query.new;
//   const qFavorite = req.query.favorite
//   try {
//     let reviews;

//     if (qNew) {
//         reviews = await Review.find().sort({ createdAt: -1 }).limit(3);
//     }else if(qFavorite && !qNew){
//         reviews = await Review.find({
//          isFavorite:true,
//         });
//     }else {
//         reviews = await Review.find();
//     }

//     res.status(200).json(reviews);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

module.exports = {
  create,
//   updateReview,
//   deleteReview,
//   getSingleReview,
//   getAllReviews
}