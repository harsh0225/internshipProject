const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Item"
    },
    cust:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    quantity:{
        type:Number,
    }
})

module.exports = mongoose.model("Order",orderSchema);


