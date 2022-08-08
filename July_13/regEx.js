let number = "prajwal@gmal.com";

let re = /[a-z0-9@gmail.com]/;
let ans = re.test(number);
console.log(ans);

const d = new Date();
let text = d.toDateString();
console.log(d.toJSON());
console.log("To time String=" + d.toTimeString());

console.log("TO UTC String =" + d.toUTCString());

console.log("ValueOf=" + d.valueOf());
