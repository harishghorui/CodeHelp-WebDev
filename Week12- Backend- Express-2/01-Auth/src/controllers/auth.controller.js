const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();


// signUp route handler
exports.signUp = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        // authentication
        const existingUser = await UserModel.findOne({email});

        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:"User already exits"
            })
        }

        // encrypt password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        // if hashing failed
        catch (err) {
            return res.status(500).json({
                success:false,
                message:"Password encryption failed"
            })
        }


        // Create entry for user to database
        const user = await UserModel.create(
            { name, email, password:hashedPassword, role }
        )

        res.status(200).json({
            success:true,
            data:user,
            message:"New User Created Successfully"
        })

    }

    catch (err) {
        console.error(err);

        res.status(500).json({
            success:false,
            message:"Signup fail, please try again later"
        })
    }
}


exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;

        // check email,password exist or not
        if(!email || !password) {
            return res.status(401).json({
                success:false,
                message:"Please enter valid input"
            })
        }
        
        // check existing user or not
        let user = await UserModel.findOne({email})

        if(!user) {
            return res.status(401).json({
                success:false,
                message:"User is not registered"
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        }

        // verify password & generate JWT
        if(await bcrypt.compare(password, user.password)) {

            // token generating
            const token = jwt.sign(payload, 
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"2h"
                                }
            )

            // user = user.toObject();
            user.token = token; //include token in user
            user.password = undefined; 

            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true
            }

            // send the token to cookies
            res.cookie("tokenCookie", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"User Logged in Successfully"
            })

        }
        else {
            // password incorrect
            return res.status(403).json({
                success:false,
                message:"Password Incorrect"
            })
        }


    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success:false,
            message:"Login Failure"
        })
    }
}