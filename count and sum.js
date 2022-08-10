function countPositivesSumNegatives(input) {
  let negativeNumbers = [];
  let negativeNumbersSum = 0;
  let positiveNumbersCount = 0;
  
  if (input) {
    negativeNumbers = input.filter(n => n < 0);
    negativeNumbersSum = negativeNumbers.reduce((acc, num) => acc + num, 0);
    positiveNumbersCount = input.filter(n => n > 0).length; 
  }
  
  return (!!negativeNumbersSum || !!positiveNumbersCount) ? [positiveNumbersCount, negativeNumbersSum] : [];
}