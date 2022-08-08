function reverse(num) {
  let temp = 0;
  let rev = 0;
  while (true) {
    if (num == 0) {
      temp = num % 10;
      rev = rev * 10 + temp;
      num = num / 10;
    }
  }
  console.log(rev);
}

reverse(123);
