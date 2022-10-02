// giving \n at end of the array[i] and , as well

function toCsvText(array) {
  let csv = "";
  for (let i = 0; i < array.length - 1; i++) {
    csv += array[i] + "\\n";
  }
  console.log(csv + array.pop());
}

//input value (calling function)
toCsvText([
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
]);
