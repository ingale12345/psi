class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  showAddress() {
    console.log(`Address of ${this.name} is ${this.address}`);
  }
}
class Student extends Person {
  constructor(name, age, address, college, Class) {
    super(name, age, address);
    this.console = college;
    this.Class = Class;
  }
}
let s1 = new Student("Omkar", 22, "Shrirampur", "RBNB college", "BSC");
console.log("ok" + s1.hasOwnProperty("name"));
console.log(s1);
s1.showAddress();
