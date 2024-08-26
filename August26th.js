// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in
// list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences
// must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let result = [];

  // Loop through each number in array 'a'
  for (let i = 0; i < a.length; i++) {
    let number = a[i];

    // If the number is NOT in array 'b', add it to the result
    if (!b.includes(number)) {
      result.push(number);
    }
  }

  return result;
}

// other way

function arrayDiff(a, b) {
  return a.filter((value) => !b.includes(value));
}
