// Take 2 strings s1 and s2 including only
// letters from a to z. Return a new sorted
// string, the longest possible, containing
// distinct letters - each taken only once -
// coming from s1 or s2.

function longest(s1, s2) {
  let lettersSet = new Set();
  let sum = s1 + s2;
  let sumTotal = sum.split("");
  console.log(sumTotal);
  let arrLetters = [];
  let text = "";

  for (let i = 0; i < sumTotal.length; i++) {
    lettersSet.add(sumTotal[i]);
  }

  arrLetters = Array.from(lettersSet);
  arrLetters.sort();
  for (const x of arrLetters) {
    text += x;
  }
  console.log(text);
  return text;
}

// Other ways

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// Othe ways

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

// Other ways

function longest(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split("").sort();

  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]); //test
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.join("");
}
console.log(longest("xyaaAbbbccccdefww", "xxxxyyyyabklmopq"));
