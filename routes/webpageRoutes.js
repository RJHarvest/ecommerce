const mongoose = require('mongoose');
const addPrice = require('../utils/addPrice');
const totalPrice = require('../utils/totalPrice');

const Product = mongoose.model('product');

let totalCost = 0;

module.exports = (app, cart) =>{
  app.get('/', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('index', { cart, totalCost });
  });

  app.get('/about', (req, res) =>{
    totalCost = totalPrice(cart);
    res.render('about', { cart, totalCost });
  });

  app.get('/watch/classic', (req, res) =>{
    totalCost = totalPrice(cart);
    Product.find((err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/classic', { cart, totalCost, product });
    });
  });

  app.get('/watch/quartz', (req, res) =>{
    totalCost = totalPrice(cart);
    Product.find((err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/quartz', { cart, totalCost, product });
    });
  });

  app.get('/watch/chronograph', (req, res) =>{
    totalCost = totalPrice(cart);
    Product.find((err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/chronograph', { cart, totalCost, product });
    });
  });

  app.get('/watch/:productId', (req, res) =>{
    const { productId } = req.params;
    totalCost = totalPrice(cart);
    Product.findById(productId, (err, product) =>{
      (err) ? res.status(503).send(err) : res.render('watch/classic', { cart, totalCost, product });
    });
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
