// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str) {
  return str.split("").reverse().join("");
}

// Other ways

const solution = (s) => [...s].reverse().join("");
