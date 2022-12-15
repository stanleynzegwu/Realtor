const mongoose = require("mongoose")

const SubscribeSchema = new mongoose.Schema({
    userEmail: { type:String, required:true}
},
{ timestamps:true}
);

module.exports = mongoose.model("Subscribe", SubscribeSchema);