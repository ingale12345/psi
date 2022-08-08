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
function createObj(...objects) {
  let newObj = Object.assign({}, ...objects);
  return newObj;
}
let dog = createObj(canEat, canWalk);
console.log(dog);
