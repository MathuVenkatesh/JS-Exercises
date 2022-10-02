// isPalindrome (Ex. MADAM is Palindrome, teacher is not a Palindrome)
function isPalindrome(str) {
  console.log(typeof [1, 2, 3].join(""));
  str === str.split("").reverse().join("")
    ? console.log("word is palindrome")
    : console.log("word is not a palindrome");
}
isPalindrome("teacher");
