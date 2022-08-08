function arraySize(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum1 + arr[i][i];
  }
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    sum2 = sum2 + arr[i][j--];
  }

  console.log("First=" + sum1);
  console.log("Second" + sum2);
}
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arraySize(numbers);
