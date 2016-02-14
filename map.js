function map(array, projectionFunction) {
  var results;
  array.forEach(function(itemInArray) {
    return results.push(projectionFunction(itemInArray));
  });
} 
