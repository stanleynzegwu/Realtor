const Contact = require('../models/Contact')

const create = async (req,res) => {
    const newContact = new Contact(req.body)

    try{
        const savedContact = await newContact.save()
        return res.status(200).json(savedContact)

    }catch(err){
        return res.status(500).json(err)
    }
}

//DELETE

const deleteContactMessage = async (req, res) => {
  try {
    const contactMessage = await Contact.findByIdAndDelete(req.params.id);
    return res.status(200).json(contactMessage);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET Contact Message

const getSingleContactMessage = async (req, res) => {
  try {
    const contactMessage = await Contact.findById(req.params.id);
    res.status(200).json(contactMessage);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL Contact Messages

const getAllContactMessages = async (req, res) => {
  try {
      let contactMessages = await Contact.find();

    return res.status(200).json(contactMessages);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
  deleteContactMessage,
  getSingleContactMessage,
  getAllContactMessages
}