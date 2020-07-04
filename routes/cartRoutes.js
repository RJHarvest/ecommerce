const mongoose = require('mongoose');
const addPrice = require('../utils/addPrice');
const totalPrice = require('../utils/totalPrice');
const removeCartItem = require('../utils/removeCartItem');
const addToCart = require('../utils/addToCart');

const Product = mongoose.model('product');

module.exports = (app) =>{
  app.post('/api/add-cart/:productId', (req, res) =>{
    const { productId } = req.params;
    let { quantity } = req.body;
    let cart = req.session.cart;
    let cost = 0;

    Product.findById(productId).lean().exec((err, product) =>{
      if (err) return res.status(503).send(err);

      quantity = parseInt(quantity);
      cart = addToCart(cart, productId, product, quantity);
      req.session.cart = cart;
      res.redirect('back');
    });
  });

  app.get('/api/delete-cart/:productId', (req, res) =>{
    const { productId } = req.params;
    const cart = req.session.cart;
    const newCart = removeCartItem(cart, productId);
    req.session.cart = newCart;
    res.redirect('back');
  });

  app.post('/api/empty-cart', (req, res) =>{
    req.session.cart = [];
    res.redirect('back');
  });
}
