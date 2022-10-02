// array reverse (when input is string)
function numrev(n) {
  let i;
  let resultnum = [];
  for (i = n.length - 1; i >= 0; i--) {
    //console.log(num[i]);
    resultnum.push(parseInt(n[i]));
  }
  console.log(resultnum);
}

numrev("35231");

// array reverse (input is not string)
function numrev(n) {
  console.log(n.toString().split("").reverse());
  console.log(n.toString().split("").reverse().map(Number));
}

numrev(13253);
