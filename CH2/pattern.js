function pattern(n) {
  let space = 0;
  let star = 0;
  let str = "";
  for (let i = 0; i < n; i++) {
    space = n - (i + 1);
    star = i + 1;
    for (let s = 0; s < space; s++) {
      str = str + " ";
    }
    for (let st = 0; st < star; st++) {
      str = str + "#";
    }
    str = str + "\n";
  }
  console.log(str);
}
pattern(4);
