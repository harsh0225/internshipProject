const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
    }
})

module.exports = mongoose.model('Item',itemSchema);