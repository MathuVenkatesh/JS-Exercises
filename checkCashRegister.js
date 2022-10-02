function checkCashRegister(price, cash, cid) {
  let change = 0;
  let tot = 0;
  cid.forEach((val) => {
    tot += val[1];
  });
  totalAmt = tot.toFixed(2);
  console.log("this is total amount", totalAmt);
  change = cash - price;
  change = change.toFixed(2);
  console.log("this is change", change);
  if (change > totalAmt) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === totalAmt) {
    //console.log('hi')
    return { status: "CLOSED", change: cid };
  } else {
  }
  return change;
}

console.log(
  "response is",
  checkCashRegister(5.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
