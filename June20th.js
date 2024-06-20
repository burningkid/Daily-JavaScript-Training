// Implement a function that adds two
// numbers together and returns their
// sum in binary. The conversion can be
// done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let sum = a + b;
  let num = sum;
  let arr = [];
  while (sum > 0) {
    if (sum / 2 > 0) {
      arr.unshift(sum % 2);
      sum = Math.floor(sum / 2);
      //       console.log(sum);
      //     console.log(arr.join(""));
    }
  }
  return arr.join("");
}

// Other ways

function addBinary(a, b) {
  return (a + b).toString(2);
}

// Other ways
