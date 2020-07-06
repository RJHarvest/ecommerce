const mongoose = require('mongoose');
const addPrice = require('../utils/addPrice');

const Product = mongoose.model('product');

module.exports = (app) => {
  app.get('/watch/classic', (req, res) => {
    const query = { type: 'classic' };

    Product.find(query, (err, product) => {
      if (err) {
        console.error('[ Error in /watch/classic ]', err);
        return res.status(503).send(err);
      }
      return res.render('watch/classic', { product, ...res.locals });
    });
  });

  app.get('/watch/quartz', (req, res) => {
    const query = { type: 'quartz' };

    Product.find(query, (err, product) => {
      if (err) {
        console.error('[ Error in /watch/quartz ]', err);
        return res.status(503).send(err);
      }
      return res.render('watch/quartz', { product, ...res.locals });
    });
  });

  app.get('/watch/chronograph', (req, res) =>{
    const query = { type: 'chronograph' };

    Product.find(query, (err, product) => {
      if (err) {
        console.error('[ Error in /watch/chronograph ]', err);
        return res.status(503).send(err);
      }
      return res.render('watch/chronograph', { product, ...res.locals });
    });
  });

  app.get('/watch/:productId', (req, res) => {
    const { productId } = req.params;
    Product.findById(productId, (err, product) => {
      if (err) {
        console.error('[ Error in /watch/:productId ]', err);
        return res.status(503).send(err);
      }
      return res.render('watch/details', { product, ...res.locals });
    });
  });

}
