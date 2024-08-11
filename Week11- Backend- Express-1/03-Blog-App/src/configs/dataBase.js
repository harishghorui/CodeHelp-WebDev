const mongoose = require('mongoose');

// import dotenv
require('dotenv').config()
const DATABASE_URI = process.env.DATABASE_URI

exports.dbConnect = async () => {
    await mongoose.connect(DATABASE_URI)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
        console.log("DB Connection Error");
        process.exit(1);
    })
}