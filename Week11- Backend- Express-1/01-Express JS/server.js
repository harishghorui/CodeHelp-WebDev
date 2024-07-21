// Step1- Create a folder
// Step2- Move into that folder
// Step3- npm init -y
// Step4- npm i express
// Step5- create file: server.js

// Step6- Server instantiate
const express = require('express');
const app = express();

// Step10:
// used to parse request.body in express -> PUT or POST
const bodyParser = require('body-parser')

// Step11:
// specifically parse JSON data & add it to request.body object
app.use(bodyParser.json())

// Step7- Getting server live at port 3000
app.listen(3000, () => {
    console.log("Server started at port no. 3000")
})

// Step8- Run Command: node 'filename/servername' ex: node server.js

// Step9: Creating Routes
app.get('/', (request, response) => {
    response.send("Ram Ram saareyan ne")
})

// Created Routes for new Data submitted
app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name)
    console.log(brand)
    response.send("Car Submitted Successfully!")
})


// Step12: install mongoose command: npm i mongoose
// to create connection between Express-server & MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myCarsDatabase', {
    // some configuration
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => {console.log("Successs")})
.catch( () => {console.log("Failed")})