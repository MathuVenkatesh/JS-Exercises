//Count by X - solution 1

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//Count by X - solution 2

const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);
