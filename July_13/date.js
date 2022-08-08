const d = new Date();
console.log(d);

// console.log(new Date(2000, 03, 28));
// const d2 = new Date(2018, 6, 5, 10, 33, 30);

// console.log("D2=" + d2);
// console.log("Year=" + d2.getFullYear());
// console.log("month=" + d2.getMonth());
// console.log("Date=" + d2.getDate());

console.log("Local String=" + d.toLocaleString());

console.log("Local Date String=" + d.toLocaleDateString());
console.log("Local time String=" + d.toLocaleTimeString());

console.log("String Date =" + d.toString());
console.log("UTC TIME=" + d.toUTCString());
console.log("ISO String =" + d.toISOString());

console.log("Difference between UTC and LOcal Time:" + d.getTimezoneOffset());

console.log("Milli Seconds till now=" + Date.now());

console.log("Date to parse to milli second =" + Date.parse(new Date()));

Date.prototype.myMonth = function () {
  if (this.getMonth == 0) return "JAN";
  if (this.getMonth == 1) return "FEB";
  if (this.getMonth == 2) return "MAR";
  if (this.getMonth == 3) return "APR";
  if (this.getMonth == 4) return "MAY";
  if (this.getMonth == 5) return "JUN";
  if (this.getMonth == 6) return "JUL";
  if (this.getMonth == 7) return "AUG";
  if (this.getMonth == 8) return "SEP";
  if (this.getMonth == 9) return "OCT";
  if (this.getMonth == 10) return "NOV";
  if (this.getMonth == 11) return "DEC";
};
// document.getElementById("date").value = d.toString();

const date = new Date();

console.log(date);

console.log("date in String format" + date.toString());

// let month = setMonth(date.setMonth(4));
// console.log("date after set Month= " + month);

d.setFullYear(1999);
console.log("date after set Year= " + date);

date.setHours(5);
// setDate(25);
date.setDate(25);
console.log("date after set Date= " + date);
