const mongoose = require("mongoose")

const HirePainterSchema = new mongoose.Schema({
    address: { type:String, required:true},
    sqft: { type:Number, required:true},
    startDate: { type: String },
    completionDate: { type: String },
    type_Of_Paint: { type: String },
    painting_service: { type: String, required: true},
    paint_provider: { type: String, required: true},
    consultation: { type: String, required: true},
    repairs_needed: { type: String},
    budget: { type: Number, required: true},
    img: { type: Array, required: true},
    special_request: { type: String },
    customer_name: { type: String, required: true},
    customer_email: { type: String, required: true},
    customer_number: { type: Number, required: true},
},
{ timestamps:true}
);

module.exports = mongoose.model("HirePainter", HirePainterSchema);