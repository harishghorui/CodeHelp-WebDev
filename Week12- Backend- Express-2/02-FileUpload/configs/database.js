const mongoose = require('mongoose');

require('dotenv').config();
const DB_URL = process.env.DATABASE_URL;

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("DB connection Successful");

    } catch (err) {
        console.error(err);
        console.log("DB connection failure");
    }
}

module.exports = dbConnect;