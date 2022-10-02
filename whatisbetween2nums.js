// What is between? (1,5) output=> [1,2,3,4,5]
//(-2,2) output=> [-2,-1,0,1,2]

function between(a, b) {
  // your code here
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

//solution 2
function between(a, b) {
  const betweenArray = [];

  while (a <= b) {
    betweenArray.push(a);
    a++;
  }

  return betweenArray;
}
