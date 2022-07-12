const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DB = process.env.DATABASE;

//helps to get rid of Reference errors
mongoose.connect(DB, {
    useNewurlParser : true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() =>{
    console.log(`Connection Successful!`);
}).catch((err) =>{
    console.log(`No connection!`);
})

let schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
})

const Userdb = mongoose.model('Userdb',schema);
module.exports = Userdb;