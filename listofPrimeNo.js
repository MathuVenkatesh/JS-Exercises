// list of prime numbers till given num
let count = 0;
let i, j;
function prime(num) {
  for (j = 2; j <= num; j++) {
    for (i = 1; i <= j; i++) {
      if (j % i == 0) count++;
    }

    if (count == 2) console.log(j);
    count = 0;
  }
}

prime(10);

// solution 2
let count = 0;
let i, j;
function prime(num) {
  if (num <= 1) {
    console.log("Not Prime Number");
  } else {
    for (let j = 2; j <= num; j++) {
      count = 0;
      for (i = 1; i < j; i++) {
        if (j % i == 0) count++;
      }
      console.log("number is", j, "it is count", count);
      if (count == 1) console.log(j);
    }
  }
}

prime(10);
