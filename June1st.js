// Complete the function that accepts a
// string parameter, and reverses each
// word in the string. All spaces in the
// string should be retained.

function reverseWords(str) {
  let reversedWord = str.split(" ");
  let finalSentence = "";

  for (let i = 0; i < reversedWord.length; i++) {
    if (i === reversedWord.length - 1) {
      finalSentence += reversedWord[i].split("").reverse().join("");
    } else {
      finalSentence += reversedWord[i].split("").reverse().join("") + " ";
    }
  }

  return finalSentence;
}

// other ways
