const express = require("express");
const app = express()

// load .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000


// middleware to parse json request body
app.use(express.json());


// import routes
const todoRoutes = require('./routes/todos.js');
// mount TODO Api routes
app.use("/api/v1", todoRoutes);


// start server
app.listen(PORT, () => {
    console.log("Started at Port: ", PORT);
})

// connect to database
const dbConnect = require("./config/dataBase.js")
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send(`<h1> Hello World </h1>`)
})