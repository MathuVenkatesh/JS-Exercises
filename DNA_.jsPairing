//DNA Pairing
// whenever A comes
//'A' = ['A', 'T']
// whenever T comes
// 'T' = ['T', 'A']
// whenever C comes
// 'C' = ['C', 'G']
// whenever G comes
// 'G' = ['G', 'C']

function pairElement(str) {
  let pairs = [];
  const strArr = str.split("");
  strArr.map((elem) => {
    switch (elem) {
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break;
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
    }
  });
  return pairs;
}

pairElement("GCG");
