const mongoose = require("mongoose")

const SellPropertySchema = new mongoose.Schema({
    property_type: { type:String, required:true},
    location: { type:String, required:true},
    Sqft: { type: Number },
    yearBuilt: { type: Number },
    plotSize: { type: Number, required: true},
    img: { type: Array, required: true},
    condition: { type: String },
    features: { type: String },
    zoning: { type: String },
    topography: { type: String },
    soil_Type: { type: String },
    description: { type: String, required: true},
    asking_price: { type: Number, required: true},
    documents: { type: String, required: true},
    additional_info: { type: String },
    fullname: { type: String, required: true},
    email: { type: String, required: true},
    number: { type: Number, required: true},
},
{ timestamps:true}
);

module.exports = mongoose.model("SellProperty", SellPropertySchema);