// <!-- Welcome. In this kata, you are asked to square
// every digit of a number and concatenate them.
// For example, if we run 9119 through the function,
// 811181 will come out, because 9**2 is 81 and 1**2 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should
// return 493625 because 7**2 is 49, 6**2 is 36, and 5**2 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
// Happy Coding! -->

function squareDigits(num) {
  let str = num.toString();
  let myArray = str.split("");
  let result = "";
  let newNum;
  let newArr = [];

  for (let i = 0; i < myArray.length; i++) {
    newNum = (myArray[i] ** 2).toString();
    newArr.push(newNum);
    result += newArr[i];
  }

  return Number(result);
}

// Other sol

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

// other
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}
