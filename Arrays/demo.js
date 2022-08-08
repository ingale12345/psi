let numbers = [1, 2, 3, 47, 9, 0, 4, 6];
// numbers.forEach((value, index, nums) => {
//   console.log(value * 4);
// });

// console.log(numbers)
// console.log(numbers);

// let newValue = numbers.findIndex((value) => {
//   return value > 4;
// });
// console.log(newValue);

let arr = Array.from("Demo");
console.log(arr);

let keys = arr.keys();

//console.log(keys);

for (let key of keys) {
  console.log(arr[key]);
}
