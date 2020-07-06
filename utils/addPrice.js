module.exports = (product, quantity) =>{
  let totalCost = 0;
  if (quantity > 0) {
    totalCost = product.price * quantity;
  }
  return totalCost;
}
