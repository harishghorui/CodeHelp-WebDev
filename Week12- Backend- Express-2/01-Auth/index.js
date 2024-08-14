const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const user = require('./src/routes/user.router');
app.use('/api/v1', user);

app.listen(PORT, () => {
    console.log("Server Started at PORT: ", PORT);
})

const dbConnect = require('./src/config/database');
dbConnect()

