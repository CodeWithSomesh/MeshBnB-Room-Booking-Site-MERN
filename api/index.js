//mongo atlas password = ZsTUIpsJArf9lZl4

const express = require('express'); 
const cors = require('cors');  // Allow Frontend Server communicate with Backend Server while ensuring security
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // This package is used to encrypt user's login password 
const User = require('./models/User'); //Importing UserModels from "User.js"
require('dotenv').config(); //Require this package to read 'enc' files succesfully 
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10); 

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

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    
    try{
        const userDoc = await User.create({
            name, 
            email, 
            password:bcrypt.hashSync(password, bcryptSalt),
        });

        res.json(userDoc);

    } catch (e) {
        res.status(422).json(e);

    }

});

app.listen(4000)