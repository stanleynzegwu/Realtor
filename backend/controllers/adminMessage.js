const AdminMessage = require('../models/AdminMessage')

const create = async (req,res) => {
    const { admin, title, message} = req.body
    const newAdminMessage = new AdminMessage(req.body)

    try{
        if(!admin || !title || !message){
          return res.status(401).json("All Input Fields Should Be Filled")
        }

        const savedAdminMessage = await newAdminMessage.save()
        return res.status(200).json(savedAdminMessage)

    }catch(err){
        return res.status(500).json(err)
    }
}

// DELETE

const deleteAdminMessage = async (req, res) => {
  try {
    const adminMessage = await AdminMessage.findByIdAndDelete(req.params.id);
    return res.status(200).json(adminMessage);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET ALL Admin Messages

const getAllAdminMessages = async (req, res) => {
  try {
      let adminMessages = await AdminMessage.find();

    return res.status(200).json(adminMessages);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
  deleteAdminMessage,
  getAllAdminMessages
}