let points = [54, 82, 72, 7, 98, 3, 21, 6, 8, 9];
let newMapArray = points.map((value, index, points) => {
  return value + 1;
});
document.write(newMapArray);
