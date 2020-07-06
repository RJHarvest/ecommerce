module.exports = (cart) => {
  let totalQuantity = 0;
  if (cart) {
    totalQuantity = cart.reduce((total, item) => (total + item.quantity), 0);
  }
  return totalQuantity;
}
