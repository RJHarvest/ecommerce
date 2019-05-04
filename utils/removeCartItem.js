module.exports = (cart, productId) =>{
  for (var i = 0; i < cart.length; i++) {
    if (productId == cart[i]._id) cart.splice(i, 1);
  }
  return cart;
}
