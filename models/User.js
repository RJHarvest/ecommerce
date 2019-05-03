const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  email: String
});

mongoose.model('user', userSchema);
