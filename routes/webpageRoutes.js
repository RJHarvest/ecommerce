const mongoose = require('mongoose');
const addPrice = require('../utils/addPrice');
const totalPrice = require('../utils/totalPrice');
const totalQty = require('../utils/totalQuantity');

const Product = mongoose.model('product');

let totalCost = 0;
let totalQuantity = 0;

module.exports = (app) =>{
  app.get('/', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    res.render('index', { cart, totalCost, totalQuantity });
  });

  app.get('/about', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    res.render('about', { cart, totalCost, totalQuantity });
  });

  app.get('/watch/classic', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    const query = { type: 'classic' };

    Product.find(query, (err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/classic', { cart, totalCost, product, totalQuantity });
    });
  });

  app.get('/watch/quartz', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    const query = { type: 'quartz' };

    Product.find(query, (err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/quartz', { cart, totalCost, product, totalQuantity });
    });
  });

  app.get('/watch/chronograph', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    const query = { type: 'chronograph' };

    Product.find(query, (err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/chronograph', { cart, totalCost, product, totalQuantity });
    });
  });

  app.get('/watch/:productId', (req, res) =>{
    const { productId } = req.params;
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    Product.findById(productId, (err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/classic', { cart, totalCost, product, totalQuantity });
    });
  });

  app.get('/contact', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    res.render('contact', { cart, totalCost, totalQuantity });
  });

  app.get('/return-policy', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    res.render('returnPolicy', { cart, totalCost, totalQuantity });
  });

  app.get('/terms-and-condition', (req, res) =>{
    const cart = req.session.cart;
    totalCost = totalPrice(cart);
    totalQuantity = totalQty(cart);
    res.render('termsCondition', { cart, totalCost, totalQuantity });
  });
}
