let justAVar = `Oh, don't you worry about it, I'm
GLOBAL`;
function whereAreYou() {
  let justAVar = "Just an every day LOCAL";
  function inner() {
    return justAVar;
  }
  return inner();
}
let result = whereAreYou();
// console.log(typeof result);
console.log(result);
