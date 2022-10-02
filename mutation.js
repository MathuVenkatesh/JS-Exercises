//mutation - check str2 elements are there in str1. if yes - return true else false
function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (str1.indexOf(letter) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
