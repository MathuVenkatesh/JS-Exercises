// reverse string

let reversestr = "";
let i, j;
function rev(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(str[i]);
    reversestr += str[i];
  }
  console.log(reversestr);
}
rev("back");

//solution 2
function rev(str) {
  let reversestr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(str[i]);
    reversestr += str[i];
  }
  return reversestr;
}
rev("back");
