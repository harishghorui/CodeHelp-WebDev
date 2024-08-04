const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(`${process.env.DATABASE_URL}`, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        
    }) // returns promise
    .then( () => {
        console.log("DB connection Successful")
    })
    .catch( (error) => {
        console.log("DB connection Error: ", error);
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;