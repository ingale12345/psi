let canEat = {
  eat() {
    console.log("Eating");
  },
  name: "Demo",
};
let canWalk = {
  walk() {
    console.log("walking");
  },
};
let canSwim = {
  swim() {
    console.log("Swimming");
  },
};
let canFly = {
  fly() {
    console.log("flying");
  },
};
function Dog(name, weight) {
  this.name = name;
  this.weight = weight;
}
function createObj(target, ...objects) {
  let newObj = Object.assign(target, ...objects);
  return newObj;
}

createObj(Dog.prototype, canEat, canWalk);
let fido = new Dog("fido", 34);
fido.walk();
