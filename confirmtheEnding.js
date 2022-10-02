///// Confirm the Ending of the given word

function confirmEnding(str, target) {
  console.log(str.length);
  console.log(target.length);
  let firstLength = str.length;
  let secondLength = target.length;
  let matching = str.slice(firstLength - secondLength);
  let output = matching == target ? true : false;
  console.log(output);
}

confirmEnding("Connor", "n");
