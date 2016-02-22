function data() {
  return function() {
    return 'You got the Data';
  };
}

// returning this returns the function call, not the return of the function call?? //
var returnFunction = data();

// returns the inner function's return value //
var getData = data()();

console.log(getData);
