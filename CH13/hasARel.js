let camEat = {
  eat() {
    console.log("Eating..");
  },
};
let camWalk = {
  walk() {
    console.log("Walking..");
  },
};

let camSwim = {
  swim() {
    console.log("Swiming..");
  },
};

let fish = { ...camSwim, ...camEat };
fish.eat();
fish.swim();
