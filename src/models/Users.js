const mongoose=require('mongoose');
const { Schema }= mongoose;
const User =new Schema({
    title:String,
    description:String
});


module.exports=mongoose.model('User', User);