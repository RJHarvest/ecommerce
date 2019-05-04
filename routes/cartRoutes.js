const mongoose = require('mongoose');
const addPrice = require('../utils/addPrice');
const totalPrice = require('../utils/totalPrice');
const removeCartItem = require('../utils/removeCartItem');
// const checkCartItem = require('../utils/checkCartItem');

const Product = mongoose.model('product');

module.exports = (app, cart) =>{
  app.post('/api/add-cart/:productId', (req, res) =>{
    const { productId } = req.params;
    let { quantity } = req.body;
    let cost = 0;

    Product.findById(productId).lean().exec((err, product) =>{
      if (err) res.status(503).send(err);

      quantity = parseInt(quantity);
      (quantity > 1) ? cost = addPrice(product, quantity) : cost = product.price;
      product["quantity"] = quantity;
      product["cost"] = cost;
      cart.push(product);
      res.redirect('back');
    });
  });

  app.get('/api/delete-cart/:productId', (req, res) =>{
    const { productId } = req.params;
    cart = removeCartItem(cart, productId);
    res.redirect('back');
  });

  app.post('/api/empty-cart', (req, res) =>{
    cart = [];
    res.redirect('back');
  });
}
