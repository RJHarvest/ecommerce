const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  brand: String,
  image: String,
  price: Number,
  qty: Number,
  description: String
});

mongoose.model('product', productSchema);
