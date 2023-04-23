const express = require('express')
const mongoose = require('mongoose')

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())

const DetailsModel = require("./models/DetailsSchema")

mongoose.connect("mongodb://127.0.0.1:27017/Information?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
 { useNewUrlParser: true,useUnifiedTopology:true} 
 ).then(()=>{console.log("MDB")}).catch(()=>{console.log("Error")});


app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/details',(req,res)=>{
  const {Firstname,Secondname,DateBirth,Occupation,Company}=req.body
  const user =new DetailsModel({Firstname,Secondname,DateBirth,Occupation,Company})
  user.save().then((res1)=>{res.send({message:"Details Send"})})
})
 app.listen(4000,()=>{
    console.log("Running..")
  })