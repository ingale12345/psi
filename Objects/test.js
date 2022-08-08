var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  started: false,
  start: function () {
    console.log("Started/Running");
    this.started = true;
  },
  stop: function () {
    console.log("Stoped");
    this.started = false;
  },
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
};
JSON.stringify(car);
console.log() 
var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  started: false,
  start: function () {
    console.log("Started/running");
    this.started = true;
  },
  stop: function () {
    console.log("Stoped");
    this.started = false;
  },
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
};

console.log("befor start:" + cadi.started);
cadi.start();
console.log("after start:" + cadi.started);

console.log("befor stop:" + cadi.started);
cadi.stop();
console.log("after stop:" + cadi.started);

console.log("befor start:" + chevy.started);
cadi.start();
console.log("after start:" + chevy.started);

console.log("befor stop:" + chevy.started);
cadi.stop();
console.log("after stop:" + chevy.started);
