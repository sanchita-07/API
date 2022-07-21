const express = require('express');
const route = express.Router();
const controller = require('./controller');

route.get('/',(req,res) =>{
    res.send("Welcome To HOME PAGE!");
})

 route.post('/users', controller.create);
 route.get('/users', controller.read);
 route.put('/users/:id', controller.update);
 route.delete('/users/:id', controller.delete);

module.exports = route; 