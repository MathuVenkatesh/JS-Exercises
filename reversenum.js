// reverse number without split()

let num = 123;
let reverse = 0;
while (num > 0) {
  let rem = num % 10;
  reverse = reverse * 10 + rem;
  num = Math.floor(num / 10);
}
console.log(reverse);
