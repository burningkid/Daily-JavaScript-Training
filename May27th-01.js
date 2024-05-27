// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive. Implement a function that
// determines whether a string that contains only
// letters is an isogram. Assume the empty string
// is an isogram. Ignore letter case.

function isIsogram(str) {
  let myString = str.toLowerCase();
  let myLetters = myString.split("");
  let newLetters = new Set();
  for (let i = 0; i < myLetters.length; i++) {
    if (newLetters.has(myLetters[i])) {
      console.log("it has.");
      return false;
    } else {
      newLetters.add(myLetters[i]);
    }
    console.log("it doesn't.");
  }
  return true;
}

/// WOW

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
