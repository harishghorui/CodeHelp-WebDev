const PostModel = require('../models/post.model');

exports.createPost = async (req, res) => {
    try {
        const {title, body} = req.body;

        // create Object for using save() method
        const post = new PostModel(
            {title, body}
        )

        const newPost = await post.save();

        res.status(200).json({
            success:true,
            data:newPost,
            message:"Post Created Successfully"
        })
    }

    catch (err) {
        console.error(err);

        res.status(500).json({
            success:false,
            data:err,
            message:"Internal Error"
        })
    }
}


exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await PostModel.find();

        res.status(200).json({
            success:true,
            data:allPosts,
            message:"Posts Fetched Successfully"
        })
    }

    catch (err) {
        console.error(err);

        res.status(500).json({
            success:false,
            data:err,
            message:"Fetch Error"
        })
    }
}