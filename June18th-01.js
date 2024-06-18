// Complete the solution so that it returns
// true if the first argument(string) passed
// in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  const n = ending.length;
  console.log(str.slice(-n));
  if (str.slice(0 - n) === ending) {
    return true;
  } else {
    return false;
  }
}

// Other way

function solution(str, ending) {
  return str.endsWith(ending);
}

// other way

function solution(str, ending) {
  return str.slice(0 - ending.length) === ending;
}
