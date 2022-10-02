//Search and Replace
//myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
function myReplace(str, before, after) {
  let char = before.charAt(0);

  if (isUpperCase(char)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  let out = str.includes(before);
  console.log(after);
  after = str.replace(before, after);
  console.log(after);
}

function isUpperCase(ch) {
  return ch == ch.toUpperCase();
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("His name is tom", "tom", "John");
