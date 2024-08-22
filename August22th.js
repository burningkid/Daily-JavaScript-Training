// The goal of this exercise is to convert a string to a new string where each
// character in the new string is "(" if that character appears only once in
// the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  // Convert the word to lowercase and split it into an array of characters
  let letters = word.toLowerCase().split("");

  // Create an object to store the frequency of each character
  let charCount = {};

  // First loop: count the occurrences of each character
  for (let char of letters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Second loop: build the result string based on the frequencies
  let result = "";
  for (let char of letters) {
    // If the character occurs more than once, append ')', otherwise append '('
    result += charCount[char] > 1 ? ")" : "(";
  }

  return result;
}

// // Example usage:
// console.log(duplicateEncode("Success")); // Output: ")())())"
// console.log(duplicateEncode("recede")); // Output: "()()()"
// console.log(duplicateEncode("(( @")); // Output: "))(("

// more readable way

function duplicateEncode(word) {
  let letters = word.toLowerCase().split("");

  let charCount = {};

  for (let char of letters) {
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;
    }

    console.log(charCount);
  }

  let result = "";
  for (let char of letters) {
    if (charCount[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}
