function mango(quantity, price)
{
  const paidMangoes = (quantity / 3) * 2;

  const totalCost = paidMangoes * price;

  return totalCost;
}