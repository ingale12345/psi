class Shape {
  calculateArea() {
    if (this instanceof Circle) {
      return this.radius * this.radius * Math.PI;
    } else if (this instanceof square) {
      return this.side * this.side;
    } else if (this instanceof Rectangle) {
      return this.length * this.width;
    }
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    console.log("Area of Circle is=" + super.calculateArea());
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    console.log("Area of Rectangle is=" + super.calculateArea());
  }
}
class square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  calculateArea() {
    console.log("Area of Square is=" + super.calculateArea());
  }
}

let c = new Circle(4);
c.calculateArea();

let r = new Rectangle(4, 6);
r.calculateArea();

let;
