const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  type: String,
  brand: String,
  image: String,
  price: Number,
  description: String
});

mongoose.model('product', productSchema);
