const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String ,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    course:{
        type:String
    },
    accountType:{
        type:String,
        enum:['Admin','User'] ,
        required:true
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }]
})

module.exports = mongoose.model('User',userSchema);