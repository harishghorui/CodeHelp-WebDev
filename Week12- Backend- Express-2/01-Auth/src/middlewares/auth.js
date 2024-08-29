const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
    try {
        // extract token from Header
        const header = req.header("Authorization");
        const headerToken = header.replace("Bearer", "");

        const token = req.body.token || req.cookies.token || headerToken;

        // token not found
        if(!token) {
            return res.status(401).json({
                success:false,
                message:"Token Missing"
            })
        }

        // decode/verify the token 
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);

            req.user = payload;

        } catch (err) {
            console.log(err);

            res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
        }

        next()
        
    } catch (err) {
        console.log(err);

        res.status(401).json({
            success:false,
            message:"Something went wrong while token verification"
        })
    }
}


exports.isStudent = (req, res, next) => {
    try {
        const role = req.user.role;

        if(role !== "Student") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Student"
            })
        }

        next()

    } catch (err) {
        return res.status(401).json({
            success:false,
            message:"Invalid Role"
        })
    }
}


exports.isAdmin = (req, res, next) => {
    try {
        const role = req.user.role;

        if(role !== "Admin") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin"
            })
        }

        next();

    } catch (err) {
        return res.status(401).json({
            success:false,
            message:"Invalid Role"
        })
    }
}