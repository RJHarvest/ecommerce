module.exports = (product, quantity) =>{
  let totalCost = 0;
  for (var i = 0; i < quantity; i++) {
    totalCost += product.price;
  }
  return totalCost;
}
