var pluralizer = function(noun, number) {
  var tempNoun = noun;
  if (number > 1 || number === 0) {
    switch(tempNoun.toLowerCase()) {
      case "sheep":
        console.log(number + " " + tempNoun);
        break;
      case "goose":
        console.log(number + " " + "geese");
        break;
      case "deer":
        console.log(number + " " + tempNoun);
        brea;
      default:
        console.log(number + " " + noun + "s");
        break;
    }
  } else {
    console.log(number + " " + noun);
  }
};

pluralizer("cat", 10);
