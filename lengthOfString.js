function sentenceBreakdown(str) {
  var wordArray = str.split(" "),
      wordLength = 0;

  wordArray.forEach(function(word) {
    wordLength += (word.length);
  });
  console.log("This string has " + (wordArray.length) +
              " words. The average length of each word is " + (wordLength / wordArray.length) + ".");
}

sentenceBreakdown("I'm testing this sentence");
