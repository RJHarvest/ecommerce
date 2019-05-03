module.exports = cart =>{
  let totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].totalCost;
  }
  return totalCost;
}
