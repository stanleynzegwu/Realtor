const mongoose = require("mongoose")

const BuyPropertySchema = new mongoose.Schema({
    property_id: { type:String, required:true },
    name: { type:String, required:true},
    email: { type:String, required:true},
    phoneNumber:{ type:Number, required:true},
    message: { type:String },
},
{ timestamps:true}
);

module.exports = mongoose.model("BuyProperty", BuyPropertySchema);