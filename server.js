const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

require('./model');
app.use(require('./router'));
app.use(express.json());
app.use(morgan('tiny'));

dotenv.config({path: './config.env'})
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})