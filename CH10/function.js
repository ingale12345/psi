let examples = [
  { number1: 65, operation: "+", number2: 56 },
  { number1: 12, operation: "-", number2: 56 },
  { number1: 98, operation: "*", number2: 56 },
  { number1: 76, operation: "/", number2: 56 },
];
function Arithmetic() {
  let operationFun;
  for (example of examples) {
    operationFun = getOperationFunction(example);
    console.log(operationFun());
  }
}

function getOperationFunction(obj) {
  if (obj.operation == "+") {
    return function () {
      return parseInt(obj.number1) + parseInt(obj.number2);
    };
  }
  if (obj.operation == "*") {
    return function () {
      return parseInt(obj.number1) * parseInt(obj.number2);
    };
  }
  if (obj.operation == "/") {
    return function () {
      return parseInt(obj.number1) / parseInt(obj.number2);
    };
  }
  if (obj.operation == "-") {
    return function () {
      return parseInt(obj.number1) - parseInt(obj.number2);
    };
  }
}
Arithmetic();
