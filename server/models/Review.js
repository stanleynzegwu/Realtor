const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    userId: { type:String, required:true},
    username:{ type:String, required:true},
    useremail: { type:String, required:true},
    star:{ type:Number, required:true},
    img: { type:String },
    review: { type:String, required:true},
    isFavorite: {
        type: Boolean,
        default: false,
    },
},
{ timestamps:true}
);

module.exports = mongoose.model("Review", ReviewSchema);