function Dog(name, breed, weight) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
}
let fido = new Dog("Fido", 34);
Dog.prototype.bark = function () {
  if (this.weight < 20) {
    console.log("woof woof");
  } else {
    console.log("Bhow Bhow");
  }
};
function ShowDog(name, breed, weight, trainner) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
ShowDog.prototype = new Dog();
let newDog = new Dog("Rocky", "Mixed", 34);
newDog.bark();
