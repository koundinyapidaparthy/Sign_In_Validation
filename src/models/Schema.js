const mongoose = require('mongoose');
const SigninSchema= new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
        maxLength:2 ,
    }
})
const Details=new mongoose.model("SiginDetails",SigninSchema);
module.exports= Details;
