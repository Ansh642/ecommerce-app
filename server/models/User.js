const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    
    email:{
        type:String ,
        required :true,
        unique:true,
    },
    phoneNo:{
        type:String,
        required :true
    },
    question:{
        type:String,
        required :true,
    },
    password:{
        type:String,
        required :true
    },
 
    address:{
        type:String ,
        required :true,
    },

    role:{
        type:Number,
        default: 0,
    }
    
},{timestamps:true});


module.exports = mongoose.model("User",UserSchema);
