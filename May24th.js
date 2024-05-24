// We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function (str) {
  return Number(str);
};

// another way:

var stringToNumber = function (str) {
  return +str;
};

//Given the triangle of consecutive odd numbers:

//             1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)

function rowSumOddNumbers(n) {
  return n ** 3;
}

// function rowSumOddNumbers(n) {
//   let sum = 0;
//   let firstItem = (n ^ 2) - n + 1;
//   for (let i = 0; i < n; i = i + 2) {
//     sum = firstItem + i;
//   }
//   return sum;
// }
