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
app.post("/details",async(req,res)=>{

    try{
        console.log(req.body);
        const email=req.body.email;
        console.log(email);
        const password=req.body.password;
        console.log(password);
        const numb=req.body.number;
        console.log(numb);
        const cpassword=req.body.cpassword;
        console.log(cpassword);
        const age=req.body.age;
        console.log(age);
        console.log(req.body.Checkbox);
        if(password==cpassword){
            const newCollection=new Details({
               email:email,
               password:password,
               phone:numb,
               cpassword:cpassword,
               age:age,
            });
            const result =await newCollection.save();
            res.send(result);
            console.log(result);
        }
        else{
            res.send("email and verify email are not matching");
        }
    }
    catch(e){
        console.log(e);
    }

})


app.listen(port);