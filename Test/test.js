const a = (b) => {
  console.log("a");
  b();
};
setTimeout(() => {}, 2000);

// const b = () => {
//   console.log("b");
// };
a(() => {
  console.log("b");
});

const d = (e) => {
  console.log("d");
};

Array.prototype.map((value, Index, arr) => {}, { a: "a" });
