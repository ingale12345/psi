function makePassword(password) {
  return (gussePass) => {
    return gussePass === password;
  };
}
let checkPass = makePassword("Prajwal");
console.log(checkPass("Prajwal"));
console.log(checkPass("prajwal"));
