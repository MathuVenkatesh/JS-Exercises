// urlSlug("Winter Is Coming") should return the string winter-is-coming.
function urlSlug(title) {
  return title
    .split(" ")
    .filter((word) => {
      if (word != "") return word;
    })
    .join("-")
    .toLowerCase();
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
