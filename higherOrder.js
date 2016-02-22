function filter(array, predicateFunction) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (predicateFunction(array[i])) {
      results.push(array[i]);
    }
  } return results;
}

function map(array, predicateFunction) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    results.push(predicateFunction(array[i]));
  } return results;
}

function reduce(array, combiner, start) {
  var counter = 0,
      accValue = start;
    if (!start) {
      counter = 1;
      accValue = array[0];
    }
    for (counter; counter < array.length; counter++) {
      accValue = combiner(accValue, array[counter]);
    }
  return accValue;
  }

function addNum(a, b) {
  return a + b;
}

function multNum(a, b) {
  return a * b;
}

var numArray = [1,2,3,4];

var people = [
  {
    firstName: 'Chris',
    lastName: 'Smith',
    age: 28,
    profession: 'programmer',
    call: function() {
    return (this.firstName + " " + this.lastName + " is " + this.age + " years old and is a " + this.profession + ".");
  }
  },
  {
    firstName: 'Mary',
    lastName: 'Sue',
    age: 30,
    profession: 'artist',
    call: function() {
    console.log(this.firstName + " " + this.lastName + " is " + this.age + " years old and is a " + this.profession + ".");
  }
  }
];


var mapArray = map(people, function(person) {
  return person.age;
});

var filterArray = filter(people, function(person) {
  return person.profession === 'programmer';
});

var reduceAddArray = reduce(numArray, addNum, 0);

var reduceMultArray = reduce(numArray, multNum, 0);

console.log(mapArray);
console.log(filterArray);
console.log(reduceAddArray);
console.log(reduceMultArray);
