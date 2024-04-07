const express = require('express');
const app = express();
const PORT=process.env.PORT || 8080; 
const cors = require('cors');
const multer = require('multer');

const route = require('./routes/routes');
const categoryRoute= require('./routes/categoryRoute'); 
const productRoute = require('./routes/productRoute');
const cloudinary = require("./config/cloudinary");

const fileUpload = require('express-fileupload');

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

cloudinary.cloudinaryConnect();

app.use(express.json());
require('dotenv').config();
app.use(cors());

app.use('/api/v1/auth',route);
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/product',productRoute);


// connect to db
const db=require("./config/db");
db.connect();

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

