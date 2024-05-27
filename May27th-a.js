function isIsogram(str) {
  let myString = str;
  let myLetters = myString.split("");
  let result = true;
  console.log(myLetters);
  console.log(Array.isArray(myLetters));
  for (let i = 0; i < myLetters.length; i++) {
    if (myLetters[i] === myLetters[i + 1]) {
      result = false;
      return result;
    } else {
      return result;
    }
  }
}

isIsogram("Kiarash");
