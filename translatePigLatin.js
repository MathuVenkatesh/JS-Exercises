function translatePigLatin(str) {
  let result;
  let temp = "";
  let index = -1;
  let vol = ["a", "e", "i", "o", "u"];
  if (vol.includes(str[0])) {
    result = str + "way";
  } else {
    for (let i = 0; i < str.length; i++) {
      //console.log(str[i]);
      if (!vol.includes(str[i])) {
        temp = temp + str[i];
      } else {
        index = i;
        break;
      }
    }
    temp = temp + "ay";
    console.log(index);
    if (index === -1) {
      result = temp;
    } else {
      result = str.substring(index, str.length) + temp;
    }
  }

  return result;
}

translatePigLatin("glove");
