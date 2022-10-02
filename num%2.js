// //// find which number can give num % 2 === 0 in a given array

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       console.log(arr[i]);
//     }
//   }
//   return undefined;
// }

// findElement([8, 2, 3, 4], (num) => num % 2 === 0);

function findElement(arr, func) {
  var num;

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      num = arr[i];

      return num;
    }
  }
}
console.log(
  findElement([1, 2, 3, 4], function (num) {
    return num % 2 === 0;
  })
);
