// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function (list) {
  let min = list[0];

  for (let i = 1; i < list.length; i++) {
    if (min > list[i]) {
      min = list[i];
    }
  }
  console.log(min);
  return min;
};

var max = function (list) {
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    if (max < list[i]) {
      max = list[i];
    }
  }
  console.log(max);
  return max;
};

// Math methods

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// sort

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
