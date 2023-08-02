function warnTheSheep(queue) {
    
const wolfIndex = queue.indexOf("wolf");

  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    const sheepToWarn = queue.length - 1 - wolfIndex;
    return `Oi! Sheep number ${sheepToWarn}! You are about to be eaten by a wolf!`;
  }
}
