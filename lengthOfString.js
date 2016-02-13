function sentenceBreakdown(str) {
  var wordArray = str.split(" "),
      wordLength = 0;

  for (var i = 0; i < wordArray.length; i++) {
    wordLength += (wordArray[i].length);
  }
  console.log("This string has " + (wordArray.length) +
              " words. The average length of each word is " +     (wordLength / wordArray.length) + ".");
}

sentenceBreakdown("I'm testing this sentence");
