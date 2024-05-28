const mongoose = require("mongoose")

const BuildingSchema = new mongoose.Schema({
    propertyType: { type:String, required:true},
    location: { type: String, required: true},
    state: { type: String, required: true},
    desc: { type: String, required: true},
    img: { type: String, required: true},
    price: { type: Number, required:true},
    isFeatured: { type: Boolean, default: false}
},
{ timestamps:true}
);

module.exports = mongoose.model("Building", BuildingSchema);