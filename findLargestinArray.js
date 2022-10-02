///// Finding largest number in list of array and form a new array with max number
//Return Largest Numbers in Arrays

function findMax(arr) {
  let max = arr[0];
  // console.log(max)
  for (let i = 0; i < arr.length; i++) {
    //  console.log(arr[i])
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function largestOfFour(arr) {
  let maxes = [];

  for (let i = 0; i < arr.length; i++) {
    var innermax = findMax(arr[i]);

    maxes.push(innermax);
  }

  console.log(maxes);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
//--------------------------------------------------------------------------------//
