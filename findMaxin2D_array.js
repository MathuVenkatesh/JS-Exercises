// finding Max number in 2D Array

let newArr = [];
function findMax(inputArr) {
  let max = 0;
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      console.log(inputArr[i][j]);
      if (inputArr[i][j] > max) {
        max = inputArr[i][j];
      }
    }
  }
  console.log("max num is", max);
}

findMax([
  [100000000, 1, 2, 3, 4],
  [100, 11, 12, 13, 14],
  [2000, 21, 22, 23, 24],
  [3210, 31, 32, 33, 34],
]);
