const addPrice = require('./addPrice');

module.exports = (cart, productId, product, quantity) =>{
  if (quantity === 0) return cart;

  let cost = 0;
  (quantity > 1) ? cost = addPrice(product, quantity) : cost = product.price;

  if (cart.length === 0) {
    product['quantity'] = quantity;
    product['cost'] = cost;
    cart.push(product);
    return cart;
  }

  const cartItems = cart.map(cartItem => {
    if (cartItem._id === productId) {
      return {
        ...cartItem,
        quantity: cartItem['quantity'] += quantity,
        cost: cartItem['cost'] += cost,
      }
    }
  });
  
  return cartItems;
}
