//Flatten Array

function flattednArr(inputArr) {
  let outputArr = [];
  recursion(0, inputArr, outputArr);
  return outputArr;
}

function recursion(index, inputArr, outputArr) {
  if (index >= inputArr.length) return;

  if (Array.isArray(inputArr[index])) {
    recursion(0, inputArr[index], outputArr);
  } else {
    outputArr.push(inputArr[index]);
  }
  recursion(index + 1, inputArr, outputArr);
}

out = flattednArr([1, 2, 3, [4, [5, 6]], [7, 8, [9, 10]], [11, 12]]);
console.log(out);
