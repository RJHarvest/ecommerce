const totalPrice = require('../utils/totalPrice');
const totalQty = require('../utils/totalQuantity');

const initCartSession = (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  return next();
}

const createGlobalCartVariables = (req, res, next) => {
  const cart = req.session.cart;
  if (cart) {
    const totalCost = totalPrice(cart);
    const totalQuantity = totalQty(cart);
    res.locals = {
      cart,
      totalCost,
      totalQuantity,
    };
  }
  return next();
}

module.exports = {
  initCartSession,
  createGlobalCartVariables,
}
