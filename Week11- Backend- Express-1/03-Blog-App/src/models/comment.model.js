const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"PostModel"
        },
        user:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        }

    }, {timestamps:true}
)

module.exports = mongoose.model('CommentModel', commentSchema);