const express = require('express')
const app = express();

// Config PORT
require('dotenv').config()
const PORT = process.env.PORT || 4000 ;

// Activate Server
app.listen(PORT, () => {
    console.log("App started at PORT:", PORT);
})

// middlewares
app.use(express.json());
const fileUploads = require('express-fileupload');
app.use(fileUploads({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// DB Connection
const dbConnect = require('./configs/database');
dbConnect()

// Cloudinary connection
const cloudinary = require('./configs/cloudinary');
cloudinary.cloudinaryConnect();

// routes
const Upload = require('./routes/fileUploads.router');
app.use('/api/v1/upload', Upload)