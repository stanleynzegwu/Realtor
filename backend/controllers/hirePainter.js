const HirePainter = require('../models/HirePainter')

//CREATE HIREPAINTER REQUEST

const create = async (req,res) => {
    const {address,sqft,painting_service,paint_provider,consultation,
        budget,img,customer_name,customer_email,customer_number} = req.body

    const newHirePainterRequest = new HirePainter(req.body)

    try{
        if(!address || !sqft || !painting_service || !paint_provider || !consultation 
            || !budget || !img || !customer_name || !customer_email || !customer_number){
            return res.status(401).json("All Required Input Field Must Be Filled")
          }
        const savedHirePainterRequest = await newHirePainterRequest.save()
        return res.status(200).json(savedHirePainterRequest)

    }catch(err){
        return res.status(500).json(err)
    }
}


const getAllPainterRequest = async (req, res) => {
    try {
        let painterRequests = await HirePainter.find();
  
      return res.status(200).json(painterRequests);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

module.exports = {
  create,
  getAllPainterRequest
}