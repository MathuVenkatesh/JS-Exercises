//The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers)

const squareList = (arr) => {
  // Only change code below this line
  let posInt = arr
    .filter((num) => {
      //console.log(num)
      if (Number.isInteger(num) && num > 0) return num;
    })
    .map((val) => {
      return val * val;
    });
  return posInt;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
