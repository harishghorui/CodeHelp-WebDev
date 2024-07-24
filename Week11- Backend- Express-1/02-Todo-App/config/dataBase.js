const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewURLParser:true,
        useUnifiedTopology:true
    })
    .then(() => {console.log("DB connection Successfull")})
    .catch((error) => {
        console.log("DB connection Error");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;