let someObj = {};

someObj.schema = () => {
  console.log("I am in Schema");
};
someObj.validateInput = () => {
  console.log("Validate Input");
};

const { schema, validateInput } = someObj;
