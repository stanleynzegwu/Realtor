const mongoose = require("mongoose")

const AdminMessageSchema = new mongoose.Schema({
    admin: { type:Object, required:true},
    title: { type:String, required:true},
    message: { type:String, required:true},
},
{ timestamps:true}
);

module.exports = mongoose.model("AdminMessage", AdminMessageSchema);