function birthdayCakeCandles(candles) {
  // Write your code here
  //   console.log(candles);
  //   candles.sort();
  //   console.log(candles);
  for (let k = 0; k < candles.length; k++) {
    for (let l = k + 1; l < candles.length; l++) {
      let tmp = 0;
      if (candles[k] > candles[l]) {
        tmp = candles[k];
        candles[k] = candles[l];
        candles[l] = tmp;
      }
    }
  }
  //   console.log(candles);
  let temp = candles[candles.length - 1];
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == temp) {
      count++;
    }
  }
  return count;
}
arr = [8, 2, 3, 4, 5, 6, 7, 8, 2, 4, 5, 6, 4, 3, 8];
document.write(birthdayCakeCandles(arr));
