const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const token = require('jsonwebtoken');
const DB = process.env.DATABASE;

mongoose.connect(DB)
  .then(() => {
    console.log(`Connection Successful!`);
  })
  .catch((err) => {
    console.log(`No connection!`);
    console.log(err);
  });

let schema = new mongoose.Schema({
  name: {
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
    trim: true,
    minlength: 6
  },
});

// schema.pre("save", (next) => {
//   if (this.isModified("password")) {
//     this.password = bcrypt.hash(this.password, 10);
//   }
//   next();
// });

const Userdb = mongoose.model('Userdb',schema);
module.exports = Userdb;
