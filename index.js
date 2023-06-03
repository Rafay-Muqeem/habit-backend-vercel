const connectToMongo = require('./db');
const cors = require('cors');
connectToMongo();

const User = require('../models/User');

const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/habit', require('./routes/habit'));
app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/api/auth/getusers', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

app.get('/check', (req, res) => {
    res.send("checking...")
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Habit Tracker listening on ${PORT}`)
})
