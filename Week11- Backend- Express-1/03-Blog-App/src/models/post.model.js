const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true,
        },
        likes:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"LikeModel"
            }
        ],
        comments:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"CommentModel"
            }
        ],

    }, {timestamps:true}
)

module.exports = mongoose.model("PostModel", postSchema);