function Car(name, color, company, year) {
  this.name = name;
  this.company = company;
  this.year = year;
  this.start = () => {
    console.log("waiting for start");
    console.log("Car started");
  };
  this.drive = () => {
    console.log("Driving ....");
  };
  this.stop = () => {
    console.log("Stopping Car");
    console.log("Car is Stopped");
  };
}

let car1 = new Car("CRETA", "White", "Hyundai", 2020);
car1.start();
car1.drive();
car1.stop();
