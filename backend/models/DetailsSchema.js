const mongoose = require('mongoose')

const DetailsSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        require:true
    },
    Secondname:{
        type:String,
        require:true
    },
    DateBirth:{
        type:String,
        require:true
    },
    Occupation:{
        type:String,
        require:true
    },
    Company:{
        type:String,
        require:true

    }

})


const DetailsModel  =  mongoose.model("details",DetailsSchema)
module.exports = DetailsModel;