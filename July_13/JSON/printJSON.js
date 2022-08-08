let student = {
  name: "Omkar",
  Address: "Pune",
  class: "mcom 2nd",
};

function demo() {
  let ans = JSON.stringify(student);
  console.log(ans);

  console.log(JSON.parse(ans));
  document.getElementById("text").innerHTML = ans;
  //document.getElementById("text").innerHTML = ans;
}
