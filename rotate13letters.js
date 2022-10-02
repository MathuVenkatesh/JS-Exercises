//Caesars Cipher
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

function rot13(str) {
  console.log(str);
  var alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  var alphabets13 = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  var resultStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (str[i] === alphabets[j]) {
        resultStr.push(alphabets13[j]);
        console.log(resultStr);
      }
    }
  }
  console.log(resultStr.join(""));
}

rot13("SERR CVMMN!");
