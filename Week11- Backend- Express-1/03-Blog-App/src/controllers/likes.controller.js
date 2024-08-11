const LikeModel = require('../models/like.model');
const PostModel = require('../models/post.model');

exports.likePost = async (req, res) => {
    try {
        const {post, user} = req.body;

        const liking = new LikeModel (
            {post, user}
        )

        const newLike = await liking.save();

        // also link this to post
        const updatedPost = await PostModel.findByIdAndUpdate(post, {$push: {likes: newLike} }, {new: true} )
                            .populate("likes")
                            .exec();

        res.json({
            post:updatedPost
        })
    }

    catch (err) {
        console.error(err)

        res.status(500).json({
            success:false,
            message:"Error Liking"
        })
    }
}

exports.unlikePost = async (req, res) => {

    try {
        const {post, like} = req.body;

        // delete the users like model
        const unlike = await LikeModel.findOneAndDelete({post:post, _id:like});
        
        console.log(unlike)


        // update the postModel
        const updatedPost = await PostModel.findByIdAndUpdate(post, {$pull: {likes: unlike._id} }, {new: true} );


        res.json({
            post:updatedPost
        })

    }

    catch (err) {
        console.error(err)

        res.status(500).json({
            success:false,
            message:"Error Unlike"
        })
    }

}