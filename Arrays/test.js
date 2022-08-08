let arr = [3, 5, 6, 3, 2, 4, 4655, 78, 8];
let fnd = arr.findIndex((value, index, array) => {
  return value > 7;
});
console.log(fnd);

let fe = arr.filter((value, index, arr) => {
  return value % 2 === 0;
});
console.log(fe);
