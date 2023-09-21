function mango(quantity, price)
{
  const paidMangoes = Math.floor(quantity / 3) * 2 + (quantity % 3);

  const totalCost = paidMangoes * price;

  return totalCost
}
