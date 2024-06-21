// Task
// Write a function that returns both
// the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr) {
  arr.sort((a, b) => a - b);
  let newArr = [];
  newArr.push(arr[0], arr[arr.length - 1]);
  return newArr;
}

// Other ways