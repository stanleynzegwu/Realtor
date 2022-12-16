const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    userId: { type:String, required:true},
    userEmail: { type:String, required:true},
    img: { type:String, required:true},
    review: { type:String, required:true},
},
{ timestamps:true}
);

module.exports = mongoose.model("Review", ReviewSchema);