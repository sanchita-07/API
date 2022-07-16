const express = require('express');
const route = express.Router();
const controller = require('./controller');

route.get('/',(req,res) =>{
    res.send("Welcome To HOME PAGE!");
})



route.post('/sign',(req,res) => {
    // const {name, email, password} = req.body;
    console.log(req.body);
    res.json({message : req.body});
 })

 route.post('/users', controller.create);
 route.get('/users', controller.find);
 route.put('/users/:id', controller.update);
 route.delete('/users/:id', controller.delete);

module.exports = route; 