const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"PostModel"
        },
        user:{
            type:String,
            required:true,
            unique:true
        }

    }
)

module.exports = mongoose.model('LikeModel', likeSchema);