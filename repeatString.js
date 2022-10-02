//// Repeat a sting 'n times

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let i = 0;
  let result = "";
  while (i < num) {
    result = result + str;
    i++;
  }
  return result;
}

repeatStringNumTimes("abc", 3);
