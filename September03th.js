// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  // Convert the string to lowercase and split it into an array
  let array = text.toLowerCase().split("");
  let obj = {};
  let count = 0;

  // Count the occurrences of each character
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]] += 1;
    }
  }

  // Count the characters that occur more than once
  for (let key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }

  return count;
}

// Other way

function duplicateCount(text) {
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];

  lower.split("").forEach(function (letter) {
    if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}

// Other way

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
