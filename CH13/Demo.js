function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

let p1 = new Person("Sunil", 35, "Ahmadnagar");
console.log(p1);

Person.prototype.showAddress = function () {
  console.log(`Address of ${this.name} is ${this.address}`);
};

p1.showAddress();

function Student(name, age, address, college, Class) {
  /*
  this.name = name;
  this.age = age;
  this.address = address;
*/
  Person.call(this, name, age, address);
  this.college = college;
  this.Class = Class;
}
Student.prototype = new Person();
let s1 = new Student("Omkar", 22, "Shrirampur", "RBNB college", "BSC");
console.log("ok" + s1.hasOwnProperty("name"));
console.log(s1);
s1.showAddress();
