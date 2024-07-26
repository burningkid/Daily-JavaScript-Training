// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const arr = s.split("");
  const newArr = arr.filter(function (letter) {
    return letter !== "!";
  });
  return newArr.join("");
}

// other way

function removeExclamationMarks(s) {
  return s.split("!").join("");
}

// other way

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

// other way

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}
