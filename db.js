const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = "mongodb+srv://krafay92:123R%40f%40y@cluster0.wfnbnmk.mongodb.net/?retryWrites=true&w=majority";

// const mongoURI = process.env.DATABASE
const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected Successfully");
    }).catch(err => {
        console.log(console.log(err, "Connection Failed")
        )
    })
}

module.exports = connectToMongo;