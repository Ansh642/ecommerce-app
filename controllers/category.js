const slugify = require('slugify');
const Category = require('../models/Category');
const Product = require('../models/Product');
require('dotenv').config();


exports.createCategory = async(req,res)=>{
    try{
    const {name}=req.body;
    
    if(!name){
        return res.status(400).json({
            success:false,
            message:"Please enter a name",
        });
    }
    const existingCategory = await Category.findOne({name});

    if(existingCategory)
    {
        return res.status(200).json({
            success:false,
            message:"Category already exists",
        });
    }

    const newCategory = await Category.create({name,slug:slugify(name)});

    return res.status(200).json({
        success:true,
        message:"Category created successfully",
        newCategory,
    });
  }

  catch(err)
  {
    return res.status(500).json({
        success:false,
        message:"Error creating category",
    });
  }
}

exports.showAllCategories = async(req,res)=>{
    try
    {
        const allCategories = await Category.find({},{name:1,_id:0});

        return res.status(200).json({
            success:true,
            message:"All categories displayed successfully",
            allCategories,
        });
    }
    catch(err)
    {
        return res.status(500).json({
            success:false,
            message:"Error showing all category",
        });
    }

}

exports.deleteCategory = async(req,res)=>{
    try{
        const {id} = req.params;
        console.log(id);

        await Category.findByIdAndDelete(id);
        return res.status(200).json({
            success:true,
            message:"All categories deleted successfully",
        });
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Error deleting single category",
        }); 
    }
}

