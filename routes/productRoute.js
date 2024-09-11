const express=require('express');
const router=express.Router();

const { auth, isAdmin } = require('../middleware/middleware');
const { createProduct, getAllProduct, getProduct, searchProduct, findSingleProduct } = require('../controllers/product');


router.post('/create-product',createProduct);
router.get('/get-products',getAllProduct);
router.post('/get-product',getProduct);
router.get('/search/:keywords',searchProduct);
router.get('/single-product/:name',findSingleProduct);

module.exports= router;

