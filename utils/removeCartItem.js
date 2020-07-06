module.exports = (cart, productId) =>{
  if (cart) {
    cart = cart.filter((cart) => cart._id !== productId);
  }
  return cart;
}
