// ATM machines allow 4 or 6 digit PIN codes and PIN codes
// cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  // Check if the length of the pin is either 4 or 6
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  // Convert the pin string to an array of numbers
  let array = pin.toString().split("").map(Number);

  // Check if any of the elements in the array is NaN
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return false;
    }
  }

  // If the length is correct and all elements are numbers, return true
  return true;
}

// other ways

function validatePIN(pin) {
  // Regular expression to match exactly 4 or 6 digits
  const pinRegex = /^(\d{4}|\d{6})$/;

  // Test the pin against the regular expression
  return pinRegex.test(pin);
}
