const BuyProperty = require('../models/BuyProperty')

const create = async (req,res) => {
    const { name, email, phoneNumber} = req.body
    const newPropertyRequest = new BuyProperty(req.body)

    try{
        if(!name || !email || !phoneNumber){
          return res.status(401).json("All Required Input Fields Should Be Filled")
        }

        const savedPropertyRequest = await newPropertyRequest.save()
        return res.status(200).json(savedPropertyRequest)

    }catch(err){
        return res.status(500).json(err)
    }
}

// //DELETE

// const deleteContactMessage = async (req, res) => {
//   try {
//     const contactMessage = await Contact.findByIdAndDelete(req.params.id);
//     return res.status(200).json(contactMessage);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// }

// //GET Contact Message

// const getSingleContactMessage = async (req, res) => {
//   try {
//     const contactMessage = await Contact.findById(req.params.id);
//     res.status(200).json(contactMessage);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

//GET ALL BUYPROPERTY REQUEST

const getAllBuyPropertyRequest = async (req, res) => {
  try {
      let BuyPropertyRequests = await BuyProperty.find();

    return res.status(200).json(BuyPropertyRequests);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
//   deleteContactMessage,
//   getSingleContactMessage,
  getAllBuyPropertyRequest
}