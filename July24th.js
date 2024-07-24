// A pangram is a sentence that contains every single letter
// of the alphabet at least once. For example,
// the sentence "The quick brown fox jumps over the lazy dog" is a
// pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(sentence) {
  sentence = sentence.toLowerCase();
  let letterSet = new Set();
  for (let char of sentence) {
    if (char >= "a" && char <= "z") {
      letterSet.add(char);
    }
  }
  return letterSet.size === 26;
}

// other way

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

// other way

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

// other way

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
