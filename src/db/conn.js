const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://koundinya:Koundi@123@cluster0.oikqk.mongodb.net/mernStack?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{console.log("connected")})
.catch(e=>console.log(e));
