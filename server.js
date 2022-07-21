const express = require('express');
const dotenv = require('dotenv');
const token = require('jsonwebtoken');


dotenv.config({ path: "./config.env" });

const app = express();

const Userdb = require('./model');
app.use(express.json());
app.use(require('./router'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
