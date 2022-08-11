function countPositivesSumNegatives(input) {
  let count = 0, sum = 0;
  if (input) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] < 0) {
        sum += input[i];
      } else if (input[i] > 0) {
        count += 1;
      }
    }
  }
  return !!count ? [count, sum] : [];
}