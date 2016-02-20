function inArray(array, element) {
  for (var i = 0; i < array.length; i++) {
    if ( array[i] === element ) return true;
  }
  return false;
}

function matchArray(obj, elementArray) {
  var objArr = Object.keys(obj);
  if (objArr.length !== elementArray.length) {
    console.log('false length');
    return false;
  }
  for (var i = 0; i < objArr.length; i++) {
    if (!inArray(elementArray, objArr[i])) {
      console.log('false element');
      return false;
    }
  }
  console.log('true');
  return true;
}


obj = {
  cat: undefined,
  foo: undefined,
  bar: undefined
};

array = ['foo', 'bar', 'cat'];

matchArray(obj, array);
