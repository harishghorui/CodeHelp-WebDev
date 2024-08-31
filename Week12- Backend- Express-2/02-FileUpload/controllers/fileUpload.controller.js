const File = require('../models/File');
const cloudinary = require('cloudinary').v2;

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log("File: ", file);

        const path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path: ", path);

        file.mv(path, (error) => {
            console.log(error);
        })

        res.status(200).json({
            success:true,
            message:"Local Upload Successfull"
        })

    } catch (err) {
        console.error(err);
        res.status(401).json({
            success:false,
            message:"Local Upload Failed"
        })
    }
}

function verifyFilesFormat(formats, currFormat) {
    return formats.includes(currFormat);
}

function verifyFilesSize(size, currSize) {
    if(size < currSize) {return false}
    else {return true}
}

async function uploadToCloudinary(file, folder, quality) {
    const options = {folder};

    // image reducer
    if(quality) {
        options.quality = quality
    }

    // auto-detect file type: image, video, etc
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options)
}

exports.imageUpload = async (req, res) => {

    try {
        // fetching
        const {name, tags, email} = req.body;
        const file = req.files.imageFile;

        // format validation
        const formats = ["jpg", "jpeg", "png"];
        const currFormat = file.name.split(".")[1];

        if(!verifyFilesFormat(formats, currFormat)) {
            return res.status(400).json({
                success:false,
                message:"File Format not supported"
            })
        }

        // file size validation
        const size = Number("4000000"); // 4MB MaxSize
        const currSize = file.size;
        
        if(!verifyFilesSize(size, currSize)) {
            return res.status(400).json({
                success:false,
                message:"File size not supported"
            })
        }

        // upload to cloudinary
        const response = await uploadToCloudinary(file, "CodeHelp");

        // create DB entry
        const fileData = await File.create({
            name,
            tags,
            email,
            fileUrl:response.secure_url
        })

        // send response
        res.status(200).json({
            success:true,
            data:fileData,
            message:"Image Uploaded Successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(401).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

exports.videoUpload = async (req, res) => {

    try {
        // fetching
        const {name, tags, email} = req.body;
        const file = req.files.videoFile;

        // validation
        const formats = ["mov", "mp4"];
        const currFormat = file.name.split(".")[1];
        if(!verifyFilesFormat(formats, currFormat)) {
            return res.status(400).json({
                success:false,
                message:"Video Format not supported"
            })
        }

        // upload to cloudinary
        const response = await uploadToCloudinary(file, "CodeHelp");

        // DB entry
        const fileData = await File.create({
            name,
            tags,
            email,
            fileUrl:response.secure_url
        })
        
        res.status(200).json({
            success:true,
            data:fileData,
            message:"Video uploaded successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

exports.imageSizeReducer = async (req, res) => {
    try {
        // fetching
        const {name, tags, email} = req.body;
        const file = req.files.imageReducerFile;

        // validation
        const formats = ["jpeg", "jpg", "png"];
        const currFormat = file.name.split(".")[1];
        if(!verifyFilesFormat(formats, currFormat)) {
            return res.status(400).json({
                success:false,
                message:"Image format not supported"
            })
        }

        // upload to cloudinary
        const response = await uploadToCloudinary(file, "CodeHelp", 30);

        // DB entry
        const fileData = await File.create({
            name,
            tags,
            email,
            fileUrl:response.secure_url
        })

        res.status(200).json({
            success:true,
            data:fileData,
            message:"Reduced and Uploaded Successfully"
        })


    } catch (err) {
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}