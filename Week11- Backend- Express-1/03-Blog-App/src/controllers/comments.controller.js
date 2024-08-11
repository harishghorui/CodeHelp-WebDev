const CommentModel = require('../models/comment.model');
const PostModel = require('../models/post.model');

exports.createComment = async (req, res) => {
    try {
        // fetch data from req body
        const {post, user, body} = req.body;

        // create a comment object for save() method
        const comment = new CommentModel(
            {post, user, body}
        )

        const newComment = await comment.save();

        // find the post by ID, add the newComment to its comments array
        const updatedPost = await PostModel.findByIdAndUpdate(post, {$push: {comments: newComment}}, {new: true})
                            .populate('comments') //populate the comments array with comment database
                            .exec();

        res.json({
            post: updatedPost
        })
    }

    catch (err) {
        console.error(err)
        
        res.status(500).json({
            success:false,
            message:"Error Creating Comment"
        })
    }
}