var multiplyer = function(start, end, highestFactor) {
  for (var currentNum = start; currentNum <= end; currentNum++) {
    for (var currentFactor = 0; currentFactor <= highestFactor; currentFactor++) {
    console.log(currentNum + " * " + currentFactor + " = " + (currentNum * currentFactor));
  }
  }

};

multiplyer(0, 10, 9);
