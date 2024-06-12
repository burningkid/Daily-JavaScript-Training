// Given an array of integers your solution
// should find the smallest integer.

function findSmallestInt(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[0];
}
