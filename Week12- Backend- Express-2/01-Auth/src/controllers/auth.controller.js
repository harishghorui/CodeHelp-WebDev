const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');


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

}