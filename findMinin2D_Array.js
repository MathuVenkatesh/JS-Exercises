// finding min number in 2D array

let newArr = [];
function findMin(inputArr) {
  let min = inputArr[0][0];
  //console.log('min is', min)
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      //console.log(inputArr[i][j])
      if (inputArr[i][j] < min) {
        min = inputArr[i][j];
      }
    }
  }
  console.log("min num is", min);
}
// input field - function calling
findMin([
  [-100, 10, 2, 3, 4],
  [100, 11, 12, 13, 14],
  [2000, 21, 22, 23, 24],
  [3210, 31, 32, 33, 34, -200],
]);
