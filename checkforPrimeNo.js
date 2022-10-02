// check for prime number
function prime(number) {
  let count = 0;
  for (i = 1; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  count === 1 ? console.log("prime") : console.log("not prime");
  console.log(count);
}

prime(6);
