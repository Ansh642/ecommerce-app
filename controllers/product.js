const {uploadImageToCloudinary} = require('../config/imageUpload');
const Category = require('../models/Category');
require('dotenv').config();
const Product = require('../models/Product');

exports.createProduct = async (req,res)=>{
  try{
    const {name,description,price,category,quantity} = req.body;
    const photo = req.files.photo;

    if(!name || !description || !price || !category || !quantity)
    {
      return res.status(400).json({
          success: false,
          message: 'Please fill in all required fields',
      });
    }

    const categoryDetails = await Category.find({name:category});

    if(!categoryDetails)
    {
      return res.status(400).json({
        success: false,
        message: 'No such category exists',
      });
    }

    const imageDetails = await uploadImageToCloudinary(photo,process.env.FOLDER_NAME);

    const product = new Product({
      name,
      description,
      price,
      category: categoryDetails[0]._id,
      quantity,
      photo: imageDetails.secure_url,
    });
    
    await product.save();

    return res.status(200).json({
      success: true,
      message:"Product created successfully",
      product,
    });
    
  }
  catch(err)
  {
  return res.status(500).json({
      success:false,
      message:"Error creating product",
  });
 }
}

exports.getAllProduct = async(req,res)=>{
  try{
    const allProducts = await Product.find({}).limit(12).sort({createdAt:-1});

    return res.status(200).json({
      success:true,
      message: "All products fetched successfully",
      total: allProducts.length,
      allProducts
    });
  }

  catch(err){
    return res.status(500).json({
      success:false,
      message:"Error in fetching all products",
  });
  }
}

// get products from a single category
exports.getProduct = async(req,res)=>{
  try{
    const {category} = req.body;
    
    const products = await Product.find({category});

    return res.status(200).json({
      success:true,
      message: "All products fetched successfully",
      products,
    });
  }

  catch(err){
    return res.status(500).json({
      success:false,
      message:"Error in fetching products",
  });
  }
}


exports.updateProduct = async(req,res)=>{
  try{

    const {id} = req.params;
    const {name,description,price,quantity} = req.body;
    //const photo = req.files.image;
    //console.log(photo);

    if(!name || !description || !price  || !quantity)
    {
      return res.status(400).json({
          success: false,
          message: 'Please fill in all required fields',
      });
    }

    //const imageDetails = await uploadImageToCloudinary(photo,process.env.FOLDER_NAME);

    const productDetails = await Product.findByIdAndUpdate(id,{
      name: name,
      description: description,
      quantity: quantity,
      price: price,
    })

    return res.status(200).json({
      success: true,
      message:"Product updated successfully",
      productDetails,
    });
    
  }
  catch(err)
  {
  return res.status(500).json({
      success:false,
      message:"Error updating category",
  });
 }
}


// search related products
exports.searchProduct = async(req,res)=>{
  try{
    const {keywords} = req.params;

    const similarProducts = await Product.find({
        $or: [
          { name: { $regex: keywords, $options: "i" } },
        ],
      })

    //console.log(similarProducts);

    return res.status(200).json({
      success:true,
      message:"Related products fetched successfully",
      similarProducts,
    });
  }
  catch(err){
    return res.status(500).json({
      success:false,
      message:"Error",
    });
  }
}


exports.findSingleProduct = async(req,res)=>{
  try{
    const {name} = req.params;
    //console.log(name);
    const product = await Product.findOne({name});

    return res.status(200).json({
      success:true,
      message:"Product found successfully",
      product,
    })

  }
  catch(err){
    return res.status(500).json({
      success:false,
      message:"Error",
    });
  }
}
