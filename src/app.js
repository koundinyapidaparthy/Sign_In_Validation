const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app=express();
const port =process.env.PORT || 8000;
const static_path=path.join(__dirname,"../public");
const Views_path=path.join(__dirname,"../templates/views");
const Partials_path=path.join(__dirname,"../templates/partials");
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.bodyParser());
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",Views_path);
hbs.registerPartials(Partials_path);


// ! db
require("./db/conn");

// !models
const Details=require("./models/Schema");


app.get("/",async(req,res)=>{
    res.render("Sigin");
})
app.get("/Login1",async(req,res)=>{
    res.render("Login1");
})
app.post("/Login1",async(req,res)=>{

    try{
        const email=req.body.email;
        const password=req.body.password;
        const numb=req.body.number;
        const cpassword=req.body.cpassword;
        const age=req.body.age;
        const Checkbox=req.body.Checkbox;
        if(password==cpassword){
            const newCollection=new Details({
               email:email,
               password:password,
               phone:numb,
               cpassword:cpassword,
               age:age,
            });
            const result =await newCollection.save();
            res.render("Login1");
            console.log(result);
        }
        else{
            res.send("some error occured");
        }
    }
    catch(e){
        console.log(e);
    }

})


app.listen(port);