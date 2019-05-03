const mongoose = require('mongoose');
const addPrice = require('../utils/addPrice');
const totalPrice = require('../utils/totalPrice');

const Product = mongoose.model('product');

let cart = [];
let cost = 0;
let totalCost = 0;

module.exports = app =>{
  app.post('/api/add-cart/:productId/:quantity', async (req, res) =>{
    const { productId, quantity } = req.params;

    const productDetails = await Product.findById(productId);
    (quantity > 1) ? cost = addPrice(productDetails) : cost = productDetails.price;
    productDetails["quantity"] = quantity;
    productDetails["cost"] = cost;

    cart.push(productDetails);
    res.redirect('back');
  });

  app.post('/api/delete-cart/:productId', (req, res) =>{
    const { productId } = req.params;

    for (var i = 0; i < cart.length; i++) {
      if (productId == cart[i]._id) cart.splice(i, 1);
    }

    res.redirect('back');
  });

  app.post('/api/empty-cart', (req, res) =>{
    cart = [];
    res.redirect('back');
  });

  app.get('/', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('index', { cart, totalCost });
  });

  app.get('/about', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('about', { cart, totalCost });
  });

  app.get('/watch', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('watch', { cart, totalCost });
  });

  app.get('/contact', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('contact', { cart, totalCost });
  });

  app.get('/return-policy', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('returnPolicy', { cart, totalCost });
  });

  app.get('/terms-and-condition', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('termsCondition', { cart, totalCost });
  });
}
