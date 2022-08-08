let cars = ["BMW", "Hyundai", "Maruti", "Suzuki", "Honda", "Baratbenz", "Tata"];
let str = cars.toString();
console.log(str);
let joinDemo = cars.join("");
console.log(joinDemo);
console.log(cars.push("Shubham"));
console.log(`Pop Element is=${cars.pop()}`);
console.log(`Array Elements are :${cars.toString()}`);
console.log(cars.unshift("Demo"));
console.log(cars.unshift("Demo"));
console.log(`Array Elements are :${cars.toString()}`);
console.log(cars.shift());
console.log(cars.shift());

let new_array = [1, 2, 3, 4, 5, 6];
document.write(cars.concat(new_array).length);
document.write("<br>" + cars.length);
document.write("<br>" + new_array.length);

console.log(cars.concat(new_array));
