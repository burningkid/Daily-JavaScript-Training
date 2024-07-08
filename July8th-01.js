// ATM machines allow 4 or 6 digit PIN codes and PIN codes
// cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  let array = pin.toString().split("").map(Number);
  console.log(array);
  if (array.length === 4 || array.length === 6) {
    console.log("True");
  } else {
    console.log("False");
  }

  return;
}

validatePIN("1214");
