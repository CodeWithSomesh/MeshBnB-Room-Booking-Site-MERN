//mongo atlas password = ZsTUIpsJArf9lZl4

const express = require('express'); 
const cors = require('cors');  // Allow Frontend Server communicate with Backend Server while ensuring security
const mongoose = require('mongoose');
const User = require('./models/User'); //Importing UserModels from "User.js"
require('dotenv').config(); //Require this package to read 'enc' files succesfully 
const app = express();

app.use(express.json()); //Using JSON Parser

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

//  Connecting to Mongo Atlas 
mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    User.create({
        name, 
        email, 
        password,
    });

    res.json({name, email, password});
});

app.listen(4000)