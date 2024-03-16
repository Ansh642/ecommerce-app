const JWT = require('jsonwebtoken');
const User = require('../models/User');
require("dotenv").config();


exports.auth = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      req.user = decode;
      next();
      
    } catch (error) {
      console.log(error);
    }
};


exports.isAdmin = async (req, res, next) => {
  try {

    if (req.user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } 
    else {
      next();
    }
  } 
  catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
