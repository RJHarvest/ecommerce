const addPrice = require('./addPrice');

const addNewItemToCart = (cart, product, quantity, cost) => {
  product['quantity'] = quantity;
  product['cost'] = cost;
  cart.push(product);
  return cart;
}

module.exports = (cart, productId, product, quantity) => {
  if (quantity === 0) return cart;

  let cost = 0;
  (quantity > 1) ? cost = addPrice(product, quantity) : cost = product.price;

  // increase quantity and cost if item already in cart
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]._id === productId) {
      cart[i]['quantity'] += quantity;
      cart[i]['cost'] += cost;
      return cart;
    } 
  }

  // append a new item to cart
  return addNewItemToCart(cart, product, quantity, cost);
}
