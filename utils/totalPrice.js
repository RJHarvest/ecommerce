module.exports = cart =>{
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].cost;
  }
  return totalCost;
}
