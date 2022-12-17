const mongoose = require("mongoose")

const OfferSchema = new mongoose.Schema({
    title: { type:String, required:true},
    desc: { type: String, required: true},
    img: { type: String, required: true},
    category: { type: String, required: true}, //Either Building,Land,Painters
    validDate: { type: Object, required: true }
},
{ timestamps:true}
);

module.exports = mongoose.model("Offer", OfferSchema);