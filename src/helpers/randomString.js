const randomString = (n) => {
  for (
    var r = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      e = n,
      t = new Array(),
      a = 0;
    a <= e - 1;
    a++
  ) {
    t[a] = r[parseInt(Math.random() * r.length)];
    t = t;
    randomtextnumber = t.join("");
  }

  return randomtextnumber;
};

module.exports = randomString;
