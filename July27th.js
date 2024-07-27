// Implement the function unique_in_order which takes as
// argument a sequence and returns a list of items without
// any elements with the same value next to each other
// and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  const elements = Array.isArray(iterable) ? iterable : iterable.split("");
  let arr = [];

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== elements[i + 1]) {
      arr.push(elements[i]);
    }
  }
  return arr;
};

// other way

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
