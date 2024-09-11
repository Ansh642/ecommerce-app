const bcrypt = require('bcrypt');
const User = require('../models/User');
const JWT = require('jsonwebtoken');
require('dotenv').config();


exports.register = async(req,res)=>{
    try
    {
    const {name,email,password,address,phoneNo,question} = req.body;

    if(!name || !email || !password || !address || !phoneNo || !question)
    {
        return res.status(400).json({
            success: false,
            message: "Please enter complete details",
        });
    }
    
    // check for existing users
    const existingUser = await User.findOne({email: email});

    if(existingUser)
    {
        return res.status({
            success: false,
            message: 'User already exists'
        });
    }

    // now store entry in database
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({email,password: hashedPassword,phoneNo,name,address,question});

    return res.status(200).json({
        success: true,
        message: 'User created successfully',
        user,
    });

  }

    catch(err)
    {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }

}

exports.login = async (req, res) =>{
    try
    {
    const {email,password} = req.body;
    
    if(!email || !password)
    {
        return res.status(400).json({
            success: false,
            message: "Please enter complete details",
        });
    }

    const user = await User.findOne({email});

    if(!user)
    {
        return res.status(400).json({
            success: false,
            message: "User not registered",
        });
    }

    if(await bcrypt.compare(password, user.password))
    {
        const payload={
            role : user.role,
            id: user._id,
        }

        //create a token it returns a string 
        const token = JWT.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            token,
            user,
        });
    }
    else
    {
        return res.status({
            success: false,
            message: "Password is incorrect",
        });
    }
}

    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }

}

exports.forgotPassword = async (req,res)=>{

    try
    {
    const {email,newpassword,question} = req.body;
    //console.log(question);

    if(!email || !newpassword || !question)
    {
        return res.status(400).json({
            success: false,
            message: "Please enter your complete details",
        });
    }

    const user = await User.findOne({email});
    //console.log(user);

    if(!user)
    {
        return res.status(400).json({
            success: false,
            message: "No such user exists",
        });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(newpassword,10);

    const newUser = await User.findByIdAndUpdate(user._id, { password: hashedPassword });
    console.log(newUser);
    
    return res.status(200).json({
        success:true,
        message:"Password has been updated successfully",
        newUser,
    });
    }

    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }

}


exports.findUsers = async (req, res) => {

    try{
        const allUsers = await User.find({role:0});

        return res.status(200).json({
            success:true,
            message:"All users fetched successfully",
            allUsers,
        });
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }

}









