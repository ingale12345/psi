Date.prototype.myMonth = function () {
  if (this.getMonth() == 0) {
    return "JAN";
  }
  if (this.getMonth() == 1) {
    return "FEB";
  }
  if (this.getMonth() == 2) {
    return "MAR";
  }
  if (this.getMonth() == 3) {
    return "APR";
  }
  if (this.getMonth() == 4) {
    return "MAY";
  }
  if (this.getMonth() == 5) {
    return "JUN";
  }
  if (this.getMonth() == 6) {
    return "July";
  }
  if (this.getMonth() == 7) {
    return "AUG";
  }
  if (this.getMonth() == 8) {
    return "SEP";
  }
  if (this.getMonth() == 9) {
    return "OCT";
  }
  if (this.getMonth() == 10) {
    return "NOV";
  }
  if (this.getMonth() == 11) {
    return "DEC";
  }
};

let d = new Date();

console.log(d.myMonth());

console.log(d.setDate(50));
console.log(d.getDate());
