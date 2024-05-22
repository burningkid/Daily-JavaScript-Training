// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    let myNumber = Number(x[i]);
    result = result + myNumber;
  }
  return result;
}
