// Character recognition software is widely used to digitise printed texts.
// Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter),
// are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text.
// You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes("0") || arr.includes("1") || arr.includes("5")) {
      arr[arr.indexOf("0")] = "O";
      arr[arr.indexOf("1")] = "I";
      arr[arr.indexOf("5")] = "S";
    }
  }

  return arr.join("");
}

// Other ways

correct = (s) => s.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

// other ways

const corrections = {
  5: "S",
  0: "O",
  1: "I",
};

const correct = (string) =>
  string.replace(/[501]/g, (character) => corrections[character]);
