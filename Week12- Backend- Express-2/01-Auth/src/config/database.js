const mongoose = require('mongoose');
const DB_URI = process.env.DATABASE_URI;

const dbConnect = async () => {
    await mongoose.connect(DB_URI)
    
    .then(console.log("DB Connection Successful"))

    .catch( (err) => {
        console.error(err);
        console.log("DB Connection Failed");
        process.exit(1);
    })
}

module.exports = dbConnect