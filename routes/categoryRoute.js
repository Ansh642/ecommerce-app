const express=require('express');
const router=express.Router();

const {createCategory, showAllCategories, deleteCategory}= require('../controllers/category');
const {auth,isAdmin} = require('../middleware/middleware');

router.post('/create-category',auth,isAdmin,createCategory);
router.get('/categories',showAllCategories);
router.delete('/delete-category/:id',auth,isAdmin,deleteCategory);

module.exports= router;
