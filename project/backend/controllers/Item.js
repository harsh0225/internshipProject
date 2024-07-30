
const { default: mongoose } = require('mongoose');
const Item = require('../models/Item');

exports.addItem = async(req,res) => {
    try{
        const {name,price,category} = req.body;
        console.log(name,price,category)
        if(!name || !price || !category)
        {
            return res.status(400).json({
                success:false,
                message:"data is invalid"
            })
        }

        const createItem = new Item({name,price,category});
        const saveItem = await createItem.save();

        if(!saveItem)
        {
            return res.status(400).json({
                success:false,
                message:"error in database store"
            })
        }

        return res.status(200).json({
            success:true,
            message:"item store successfully",
            data:saveItem
        })
    }
    catch(error)
    {
        return res.status.json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteItem = async(req,res) => {
    try{
        const {itemId} = req.params;
        if(!itemId)
        {
            return res.status(400).json({
                success:false,
                message:"data is invalid"
            })
        }
     
        const deleteitem = await Item.findByIdAndDelete({_id:itemId});

        if(!deleteitem)
        {
            return res.status(404).json({
                success:false,
                message:"error in item deletion"
            })
        }

        return res.status(200).json({
            success:true,
            message:"ite deleted successfully"
        })
    }
    catch(error)
    {
        return res.status(404).json({
            success:false,
            error:error.message
        })
    }
}

exports.getAllItem = async(req,res) => {
    try{
        
        const allItem = await Item.find();

        res.status(200).json({
            success:true,
            data:allItem
        })
    }
    catch(error)
    {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }   
}

exports.updateItem = async(req,res) => {
    try{
        const {itemId,name,price,category} = req.body;
        

        if(!name || !price || !category) 
        {
            return res.status(400).json({
                success:false,
                message:"data is invalid"
            })
        }

        const updateitem = await Item.findOneAndUpdate({_id:itemId},{name,price,category},{new:true});

        return res.status(200).json({
            success:true,
            message:"data is updated",
            updateitem
        })

    }
    catch(error)
    {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}