// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toString().toUpperCase();
}

// Create a function that takes an integer as an
// argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  let num = Math.abs(number);
  if (num % 2 === 1) {
    return "Odd";
  }
  return "Even";
}
