const mongoose = require('mongoose');
const bcrypt= require("bcryptjs");
const SigninSchema= new mongoose.Schema({
    email:{
        type:String,
        require:true,
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
SigninSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})
const Details=new mongoose.model("SiginDetails",SigninSchema);
module.exports= Details;
