const express = require('express');
const dotenv = require('dotenv');
const token = require('jsonwebtoken');
// const morgan = require('morgan');
// const bodyparser = require('body-parser');
// const path = require('path');

dotenv.config({ path: "./config.env" });

const app = express();

const Userdb = require('./model');
app.use(express.json());
app.use(require('./router'));

// app.use(morgan('tiny'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
