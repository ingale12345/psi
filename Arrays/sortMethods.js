const fruits = ["Prajwal", "Omkar", "Rushi", "Atul", "Abhi", "Jayesh"];
fruits.sort();
fruits.reverse();
console.log(fruits);

let points = [40, 100, 5, 25, 10];
console.log("Array Before Sort =" + points);

points.sort();

console.log("After only Sort method =" + points);

points.sort(function (a, b) {
  return a - b;
});
console.log("After sorting with Argument Function(ASC) =" + points);
points.sort((a, b) => {
  return b - a;
});
console.log("After sorting with Argument Function(DESC) =" + points);
