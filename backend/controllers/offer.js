const Offer = require('../models/Offer')

const create = async (req,res) => {
    const newOffer = new Offer(req.body)

    try{
        const savedOffer = await newOffer.save()
        return res.status(200).json(savedOffer)

    }catch(err){
        return res.status(500).json(err)
    }
}

//UPDATE

const updateOffer = async (req, res) => {

  try {
    const updatedOffer = await Offer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOffer);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE

const deleteOffer = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndDelete(req.params.id);
    return res.status(200).json(offer);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET Offer

const getSingleOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    return res.status(200).json(offer);
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET ALL Offers

const getAllOffers = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category
  try {
    let offers;

    if (qNew && !qCategory) {
      offers = await Offer.find().sort({ createdAt: -1 }).limit(3);
    }else if(qCategory && !qNew){
        offers = await Offer.find({
            category:qCategory,
        });
    }else {
      offers = await Offer.find();
    }

    return res.status(200).json(offers);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
  updateOffer,
  deleteOffer,
  getSingleOffer,
  getAllOffers
}