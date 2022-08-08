function Dog(name, breed, weight) {
  this.name = name;
  this.breed - breed;
  this.weight = weight;
}
let fido = new Dog("fido", "Mixed", 23);
// console.log(fido);
Dog.prototype.bark = function () {
  if (this.weight < 20) {
    console.log("woof woof");
  } else {
    console.log("Bhow Bhow");
  }
  console.log(this.weight);
  return this.name;
};

console.log(fido.bark());
