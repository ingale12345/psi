function pattern(n) {
  str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str = str + i * j + " ";
    }
    str += "\n";
  }
  console.log(str);
}
pattern(10);
