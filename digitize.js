function digitize(n) {
 let arr = String(n).split("").reverse().map(Number);
  return arr;
}