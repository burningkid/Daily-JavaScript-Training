// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

var number = function (array) {
  return array.map(function (line, index) {
    return index + 1 + ": " + line;
  });
};

// arrow function

var number = function (array) {
  return array.map((line, index) => `${index + 1}: ${line}`);
};

//