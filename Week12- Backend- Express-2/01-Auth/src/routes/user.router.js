const express = require('express');
const router = express.Router();

// import controllers
const {signUp, login} = require('../controllers/auth.controller');
const {auth, isStudent, isAdmin} = require('../middlewares/auth')

// route to the path
router.post('/signup', signUp);
router.post('/login', login);

// Protected Routes
router.get('/admin', auth, isAdmin, (req, res) => {
    res.json({
        success:true,
        message:"Welcome to Admin Dashboard"
    })
})

router.get('/student', auth, isStudent, (req, res) => {
    res.json({
        success:true,
        message:"Welcome to Student Dashboard"
    })
})

module.exports = router