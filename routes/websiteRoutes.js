const mongoose = require('mongoose');
const addPrice = require('../utils/addPrice');

const Product = mongoose.model('product');

let cart = [];

module.exports = app =>{
  app.get('/', (req, res) =>{
    const totalCost = addPrice(cart);
    res.render('index', { cart, totalCost });
    // console.log(`cart: ${cart}`);
  });

  app.get('/about', (req, res) =>{
    res.render('about', { cart });
    cart.push({item: 'some item'});
  });

  app.get('/watch', (req, res) =>{
    res.render('watch', { cart });
  });

  app.get('/contact', (req, res) =>{
    res.render('contact', { cart });
  });

  app.get('/return-policy', (req, res) =>{
    res.render('returnPolicy', { cart });
  });

  app.get('/terms-and-condition', (req, res) =>{
    res.render('termsCondition', { cart });
  });
}
