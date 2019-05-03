module.exports = product =>{
  let totalCost = 0;
  for (var i = 0; i < product; i++) {
    totalCost += product.price;
  }
  return totalCost;
}
