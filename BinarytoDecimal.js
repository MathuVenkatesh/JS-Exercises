// Binary to Decimal conversion

function Binary(num) {
  let result = 0;
  let n = num.length - 1;
  for (i = 0; i < num.length; i++) {
    result += num[i] * 2 ** (n - i);
  }
  console.log(result);
}
Binary("1011");
