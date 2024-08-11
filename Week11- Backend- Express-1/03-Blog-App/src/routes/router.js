const express = require('express');
const router = express.Router();

// import controllers
const {createPost, getAllPosts} = require('../controllers/posts.controller');
const {createComment} = require('../controllers/comments.controller');
const {likePost, unlikePost} = require('../controllers/likes.controller');


// HTTP requests to routes
router.post('/createPost', createPost);
router.get('/getPosts', getAllPosts);
router.post('/post/createComment', createComment);
router.post('/post/like', likePost);
router.post('/post/unlike', unlikePost);

module.exports = router;