// Finding Factorial of n (n!)

function factorialize(num) {
  let result = 1;

  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}
// 5! = 5 * 4 * 3 * 2 * 1;
console.log(factorialize(5));
