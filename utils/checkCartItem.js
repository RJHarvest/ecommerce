module.exports = (cart, productId) =>{
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]._id == productId) {
      return true;
    } else {
      return false;
    }
  }
}
