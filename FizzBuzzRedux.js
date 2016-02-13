var FizzBuzz = function() {
  var answer = prompt("Please enter a number");
  var n = Math.round(answer);
  if (isNaN(n)) {
    console.log("That isn't a number");
    return false;
  } else if (answer % 1 !== 0) {
    console.log("Number rounded to nearest whole value");
  }

  for (var i = 0; i <= n; i++) {
    var str = "";
    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }
    console.log(str || i);
  }
};

FizzBuzz();
