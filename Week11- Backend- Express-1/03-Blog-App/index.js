// creating server
const express = require('express');
const app = express();


// importing dotenv
require('dotenv').config()
const PORT = process.env.PORT || 4000;

// connecting server
app.listen(PORT, () => {
    console.log("Server Started at PORT:", PORT);
})

// body parser
app.use(express.json());


// database connect
const {dbConnect} = require('./src/configs/dataBase')
dbConnect()


// default route
app.get('/', (req, res) => {
    res.send('<h1>This is Home Page</h1>')
})


// connecting router
const router = require('./src/routes/router')
app.use('/api/v1', router)