module.exports = (cart, productId) =>{
  for (let i = 0; i < cart.length; i++) {
    if (productId == cart[i]._id) cart.splice(i, 1);
  }
  return cart;
}
