module.exports = (cart) => {
  let totalCost = 0;
  if (cart) {
    totalCost = cart.reduce((total, item) => (total + item.cost), 0);
  }
  return totalCost;
}
