// finding the largest word in a sentance
let resultArr;
let resultinNum = [];
function findLongestWordLength(str) {
  //console.log (str.split(' '));
  resultArr = str.split(" ");
  for (let i = 0; i < resultArr.length; i++) {
    resultinNum.push(resultArr[i].length);
    // console.log(resultinNum);
  }
  console.log(resultinNum);

  //let maximum = resultinNum.max();
  console.log(Math.max(...resultinNum));
}

findLongestWordLength("May the force be with you");
