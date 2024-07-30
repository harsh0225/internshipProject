
const user = require('../models/User');

exports.userRegistration = async(req,res) => {
    try{

        console.log("In userRegistration controller")

        const {firstName,lastName,email,password,confirmPassword,phoneNo,course,accountType} = req.body

        const userExist = await user.findOne({email});
        if(userExist)
        {
            return res.status(422).json({
                success:false,
                message:"user is already exist1"
            })
        }
        if(!firstName || !lastName || !email || !password || !confirmPassword || !phoneNo || !accountType)
        {
            return res.status(422).json({
                success:false,
                message:"data is not valied"
            })
        }

        if(password != confirmPassword)
        {
            return res.status(422).json({
                success:false,
                message:"passwrod doesn't match"
            })
        }

        const UserCreate =  new user({firstName,lastName,email,password,phoneNo,course,accountType});

        const saveUser = await UserCreate.save();

        if(!saveUser)
        {
            return res.status(400).json({
                success:false,
                message:"data is not store"
            })
        }

        return res.status(200).json({
            success:true,
            message:"user crated successfully"
        })

    }
    catch(error)
    {   
        return res.status(400).json({
            success:false,
            message:"error in creating user"
        })

    }
}


exports.userLogin = async(req,res) => {
    try{
        const {email,password} = req.body;

        if(!email || !password)
        {
           return  res.status(422).json({
                success:false,
                message:"data is invalid"
            })
        }

        const userIsPresent = await user.findOne({email:email}).populate();

        if(!userIsPresent)
        {
            return res.status(404).json({
                success:false,
                message:"user is not present"
            })
        }

        if(password == userIsPresent.password)
        {
            userIsPresent.password = undefined
            return res.status(200).json({
                success:true,
                data:userIsPresent
            })
        }
        else
        {
            return res.status(404).json({
                success:false,
                message:"password doesn't match"
            })
        }
    }
    catch(error)
    {
        return res.status(404).json({
            success:"false",
            message:error.message
        })
    }
}