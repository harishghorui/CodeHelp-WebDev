const express = require('express');
const router = express.Router();

// import controllers
const {signUp, login} = require('../controllers/auth.controller');

// route to the path
router.post('/signup', signUp);

module.exports = router