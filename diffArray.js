// question: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  console.log(
    newArr.filter((elem) => arr1.includes(elem) !== arr2.includes(elem))
  );
}

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);
