// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let arr = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let element of arr) {
    if (vowels.includes(element)) {
      count += 1;
    }
  }

  return count;
}

// other way

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// other way

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

// other way

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}
