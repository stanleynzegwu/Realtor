const Consultancy = require('../models/Consultancy')
const User = require('../models/User')
const Property = require('../models/Property')

const create = async (req,res) => {
    const user = await User.findById(req.params.id)
    const {propertyId, phoneNumber} = req.body
    const property = await Property.findById({_id:propertyId})
    const newConsultancy = new Consultancy({
        userId: user._id,
        username: user.username,
        useremail: user.email,
        propertyId: propertyId,
        phoneNumber: phoneNumber,
        consultancyFee : property.consultancyFee,
    })

    try{
        const savedConsultancy = await newConsultancy.save()
        res.status(200).json(savedConsultancy)

    }catch(err){
        res.status(500).json(err)
    }
}

//UPDATE

const updateConsultancy = async (req, res) => {

  try {
    const updatedConsultancy = await Consultancy.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedConsultancy);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE

const deleteConsultancy = async (req, res) => {
  try {
    await Consultancy.findByIdAndDelete(req.params.id);
    res.status(200).json("Consultancy has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET USER CONSULTANCY ORDERS

const getUserConsultancy = async (req, res) => {
  try {
    const consultancy = await Consultancy.find({userId: req.params.userId});
    res.status(200).json(consultancy);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL Consultancy

const getAllConsultancy = async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

module.exports = {
  create,
  updateConsultancy,
  deleteConsultancy,
  getUserConsultancy,
  getAllConsultancy
}