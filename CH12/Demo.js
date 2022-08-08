function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = () => {
    console.log("Ghurrrr");
    //return;
  };
}

let fido = new Dog("Rocky", "mixed", 23);
Dog.prototype.add = () => {
  console.log("Barking");
};
fido.add();
fido.bark();
