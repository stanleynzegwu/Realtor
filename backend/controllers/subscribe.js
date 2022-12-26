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
    try{
        const savedSubscription = await newSubscription.save()
        res.status(200).json(savedSubscription)

    }catch(err){
        res.status(500).json(err)
    }
}

//UPDATE

const updateSubscription = async (req, res) => {

  try {
    const updatedSubscription = await Subscribe.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSubscription);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE

const deleteSubscription = async (req, res) => {
  try {
    await Subscribe.findByIdAndDelete(req.params.id);
    res.status(200).json("Subscription has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL SUBSCRIPTION

const getAllSubscription = async (req, res) => {
  const qNew = req.query.new;
  try {
    let subscription;

    if (qNew) {
        subscription = await Subscribe.find().sort({ createdAt: -1 }).limit(10);
    }else {
        subscription = await Subscribe.find();
    }

    res.status(200).json(subscription);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  create,
  updateSubscription,
  deleteSubscription,
  getAllSubscription
}