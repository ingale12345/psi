function makeFunc() {
  const name = "Mozilla";
  return function displayName() {
    console.log(name);
  };
}
// displayName();
// console.log(displayName());
let ref = makeFunc;
let demo = ref();
demo();
