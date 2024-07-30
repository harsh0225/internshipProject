

const Order = require('../models/Order');
const Item = require('../models/Item');
const User = require('../models/User');
const { default: mongoose } = require('mongoose');

exports.addOrder = async(req,res) => {
    try{    
        const {itemId,quantity,email} = req.body;
        if(!itemId || !email || !quantity) 
        {
            res.status(404).json({
                success:false,
                messeage:"data is invalid"
            })
        }

        const iteminfo = await Item.findById({_id:itemId});

        if(!iteminfo)
        {
            return res.status(404).json({
                success:false,
                messeage:"item is not found"
            })
        }

        const userInfo = await User.findOne({email});

        if(!userInfo)
        {
            return res.status(400).json({
                success:false,
                messeage:"user is not found"
            })
        }

       const createOrder = await Order.create({item:iteminfo._id,cust:userInfo._id,quantity:quantity});

       if(!createOrder)
       {
        return res.status(400).json({
            success:false,
            messeage:"error in creation of order"
        })
       }

       const updateUser = await User.findByIdAndUpdate({_id:userInfo._id},{$push:{orders:createOrder._id}});

       if(!updateUser)
       {
        return res.status(400).json({
            success:false,
            messeage:"error in updating user"
        })
       }

       return res.status(200).json({
        success:true,
        messeage:"order created successfully",
        data:createOrder
       })

    }
    catch(error)
    {
        res.status(400).json({
            success:false,
            messeage:error.messeage
        })
    }
}

exports.deleteOrder = async(req,res) => {
    try{
        const {orderId ,userId} = req.body;
        if(!orderId || !userId)
        {
            return res.status(400).json({
                success:false,
                messeage:"data is invalid"
            })
        }
        const userinfo = new mongoose.Types.ObjectId(userId);
        const orderInfo = new  mongoose.Types.ObjectId(orderId);
        const updateUserOrder = await User.findByIdAndUpdate({_id:userinfo._id},{$pull:{orders:orderInfo._id}});
        if(!updateUserOrder)
        {
            return res.status(400).json({
                success:false,
                messeage:"error in deletion of order from user"
            })
        }

        const deleteOrder = await Order.findByIdAndDelete({_id:orderId});

        if(!deleteOrder)
        {
            return res.status.json({
                success:false,
                messeage:"error in deletion of order"
            })
        }

        return res.status(200).json({
            success:true,
            messeage:"order deleted successfully"
        })


    }
    catch(error)
    {
        return res.status(400).json({
            success:false,
            messeage:"error in order deletion"
        })
    }
}


exports.getAllOrder = async(req,res) => {
    try{    
        const allOrder = await Order.find().populate('item').populate('cust').exec();
        if(!allOrder)
        {
            return res.status(400).json({
                success:false,
                messeage:"error in fetching all order"
            })
        }

        return res.status(200).json({
            success:true,
            data:allOrder
        })
    }
    catch(error)
    {
        return res.status(400).json({
            success:false,
            messeage:"error in get all order"
        })
    }
}

exports.getUserOrderDetail = async(req,res) => {
    try{
        const {userId} = req.body;
        const allUserOrder = await User.findById({_id:userId})
        .populate({
            path:'orders',
            populate:{
                path:"item"
            }
        })

        if(!allUserOrder)
        {
            return res.status(400).json({
                success:false,
                messeage:"error in fetching order details"
            })
        }

        res.status(200).json({
            success:true,
            data:allUserOrder
        })

    }   
    catch(error)
    {
        return res.status(400).json({
            success:false,
            messeage:error.messeage
        })
    }
}