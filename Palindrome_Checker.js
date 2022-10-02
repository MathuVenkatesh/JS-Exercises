//Palindrome Checker

function palindrome(str) {
  str = str.toLowerCase();
  var newString = str.replace(/[^A-Z0-9]/gi, "");
  console.log(newString);
  if (newString === newString.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("race car");
