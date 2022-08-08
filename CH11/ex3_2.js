function multN(n) {
  return (m) => {
    return m * n;
  };
}
let multiplication = multN(5);
console.log(multiplication(1));
console.log(multiplication(2));
console.log(multiplication(3));
console.log(multiplication(4));
