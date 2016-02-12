var evenCounter = function(start, end, step) {
  var counter = start;
  while (counter <= end) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
    counter += step;
  }
};

evenCounter(1, 20, 1);
