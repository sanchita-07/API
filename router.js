const express = require('express');
const route = express.Router();

route.get('/',(req,res) =>{
    res.send("Welcome To HOME PAGE!");
})

const {name, email, password} = req.body;
route.post('/sign-up',(req,res) => {
    console.log(req.body);
    res.json({message : req.body})
 })


module.exports = route; 