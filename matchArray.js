function matchArray(obj, elementArray) {
  var objArr = Object.keys(obj);
  if (objArr.length !== elementArray.length) {
    console.log('false length');
    return false;
  }
  for (var i = 0; i < objArr.length; i++) {
    var match;
    for (var j = 0; j < elementArray.length; j++) {
      if (elementArray[j] === objArr[i]) { match = true; }
    }
    if (!match) {
      console.log('false element');
      return false;
    } else { match = undefined; }
    }
  console.log('arrays contain matching elements');
  return true;
  } 



obj = {
  cat: undefined,
  foo: undefined,
  bar: undefined
};

array = ['foo', 'bar', 'cat'];

matchArray(obj, array);
