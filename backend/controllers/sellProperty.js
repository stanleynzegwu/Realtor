const SellProperty = require('../models/SellProperty')

//CREATE
const create = async (req,res) => {
    const {property_type,location,plotSize,img,description,
    asking_price,documents,fullname,email,number} = req.body

    const newProperty = new SellProperty(req.body)

    try{
        if(!property_type || !location || !plotSize || !description
            || !asking_price || !documents || !fullname || !email || !number){
            return res.status(401).json("All Required Input Field Must Be Filled")
          }
        const savedProperty = await newProperty.save()
        return res.status(200).json(savedProperty)

    }catch(err){
        return res.status(500).json(err)
    }
}

//DELETE

const deleteProperty = async (req, res) => {
  try {
    const SellPropertyRequest = await SellProperty.findByIdAndDelete(req.params.id);
    return res.status(200).json(SellPropertyRequest);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET Property

const getSingleProperty = async (req, res) => {
  try {
    const SellPropertyRequest = await SellProperty.findById(req.params.id);
    res.status(200).json(SellPropertyRequest);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL SELLPROPERTY REQUEST

const getAllProperty = async (req, res) => {
  try {
    SellPropertyRequest = await SellProperty.find();
    return res.status(200).json(SellPropertyRequest);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
  deleteProperty,
  getSingleProperty,
  getAllProperty
}