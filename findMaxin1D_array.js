// finding max in 1D array
let newArr = [];
function findMax(inputArr) {
  let max = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > max) {
      max = inputArr[i];
    }
  }
  console.log(max);
}

findMax([15, 3, , 100, 1, 6]);
