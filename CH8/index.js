let shapes = [
  { name: "circle", radius: 5 },
  { name: "square", side: 4 },
  { name: "rectangle", lenght: 5, width: 6 },
];
function getAreaFunction() {
  //const areaFn = createAreaFunction(shapes[0]);
  //console.log(typeof areaFn);
  //   const area = areaFn(shapes[0].radius);
  //   console.log(area);
  for (let shape of shapes) {
    let areaFn = createAreaFunction(shape);
    console.log(areaFn());
  }
}
function createAreaFunction(shape) {
  if (shape.name == "circle") {
    return function () {
      return "Area of Circle:" + 3.14 * shape.radius * shape.radius;
    };
  }
  if (shape.name == "square") {
    return function () {
      return "Area of square:" + shape.side * shape.side;
    };
  }
  if (shape.name == "rectangle") {
    return function () {
      return "Area of rectangle:" + shape.lenght * shape.width;
    };
  }
}
getAreaFunction();
