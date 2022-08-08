String.prototype.palindrome = function () {
  let str = this.toString();
  strArray = str.split("").reverse().join("");
  if (strArray === str) return true;
  else return false;
};
let str = "NitiN";
console.log(str.palindrome());
