// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive. Implement a function that
// determines whether a string that contains only
// letters is an isogram. Assume the empty string
// is an isogram. Ignore letter case.

function isIsogram(str) {
  let myString = str.toLowerCase();
  let myLetters = myString.split("");
  let seenLetters = new Set();
  for (let i = 0; i < myLetters.length; i++) {
    if (seenLetters.has(myLetters[i])) {
      console.log("it has");
      return false;
    } else {
      seenLetters.add(myLetters[i]);
    }
    console.log("it false");
  }
  return true;
}
