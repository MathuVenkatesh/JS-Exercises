function getIndexToIns(arr, num) {
  let resultArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    resultArr = arr.sort(function (a, b) {
      return a - b;
    });
    if (num > arr[i]) {
      sum++;
    }
    // console.log(sum)
  }
  console.log(sum);
}

getIndexToIns([40, 60], 50);

//(getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.

//(getIndexToIns([40, 60], 50) should return 1.
//(getIndexToIns([3, 10, 5], 3) should return 0.)
