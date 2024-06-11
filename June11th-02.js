// reate a function that accepts a string
// and a single character, and returns
// an integer of the count of occurrences
// the 2nd argument is found in the first one.
// If no occurrences can be found, a count
// of 0 should be returned.
function strCount(str, letter) {
  const myArray = str.split("");
  let count = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === letter) {
      count++;
    }
  }
  return count;
}

// other ways

function strCount(str, letter) {
  return str.split(letter).length - 1;
}
