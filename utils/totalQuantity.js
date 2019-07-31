module.exports = cart =>{
  var totalQuantity = 0;
  for (var i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].quantity;
  }
  return totalQuantity;
}
