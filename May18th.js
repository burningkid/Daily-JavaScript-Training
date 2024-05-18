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

function evenOrOdd2(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Complete the function that takes two integers (a, b, where a < b)
// and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let box = [];

  for (let i = a; i <= b; i++) {
    box.push(i);
  }
  return box;
}
