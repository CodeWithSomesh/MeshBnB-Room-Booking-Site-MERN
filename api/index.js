//mongo atlas password 

const express = require('express'); 
// Allow Frontend Server communicate with Backend Server while ensuring security
const cors = require('cors'); 
const app = express();

app.use(express.json()); //Using JSON Parser

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    res.json({name, email, password});
});

app.listen(4000)