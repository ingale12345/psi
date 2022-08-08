window.onload = () => {
  document.getElementById("form_submit").onclick = submitForm;
  document.getElementById("form_clear").onclick = clearForm;
  document.getElementById("course").onchange = changeCourse;
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  fname.onkeydown = keyEvent;
  fname.onmouseover = mouseOverAction;
  lname.onmouseover = mouseOverAction;
  fname.onmouseout = mouseOutAction;
  lname.onmouseout = mouseOutAction;

  //   document.getElementById("fname").onmou;
};
function mouseOutAction(e) {
  e.target.style = "background:white";
}
function mouseOverAction(e) {
  //   alert("ok");
  e.target.style = "background:red";
}
function keyEvent(e) {
  //   let a = {
  //     first_name: "",
  //     last_name: "",
  //   };
  //   console.log("before", a);
  //   setTimeout(() => {
  //     a["first_name"] = "Rohit";
  //     a["last_name"] = "Autade";
  //     console.log("After", a);
  //   }, 15000);

  let value = e.target.value;
  document.getElementById("fname_text").innerHTML = value;
  let keyDownEventText = document.getElementById("keyDownEvent");
  if (keyDownEventText != null) {
    keyDownEventText.innerHTML = value;
  }

  //let keyDownEventValue = document.getElementById("keyDownEvent").value;
  // if (keyDownEventValue != null) keyDownEventValue.innerHTML = value;
}
//OnChange Event on select Option elemnt
function changeCourse() {
  let c = document.getElementById("crc");
  let val = document.getElementById("course").value;
  if (c != null) {
    if (val == "Course") c.innerHTML = "Not Selected";
    else c.innerHTML = val;
  }
}
function submitForm() {
  let ans = document.getElementById("output");
  let txt = "";
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let course = document.getElementById("course").value;
  let genders = document.getElementsByName("gender");
  let gender;
  for (let i = 0; i < genders.length; i++)
    if (genders[i].checked) gender = genders[i].value;

  let phone =
    document.getElementById("country_code").value +
    " " +
    document.getElementById("phone").value;

  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  txt = `<table border=1>
     <tr><td>first name</td><td id="keyDownEvent">${fname}</td></tr>
     <tr><td>last name</td><td>${lname}</td></tr>
     <tr><td>Course</td><td id="crc">${course}</td></tr>
     <tr><td>Gender</td><td>${gender}</td></tr>
     <tr><td>Phone</td><td>${phone}</td></tr>
     <tr><td>Email</td><td>${email}</td></tr>
     <tr><td>Password</td><td>${pass}</td></tr>
     </table>`;
  ans.innerHTML = txt;
  //   console.log(pass);
}
function clearForm() {
  //   alert("clicked on clear");
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "Submit" && inputs[i].value == "Clear")
      console.log("OK");
    inputs[i].value = "";
  }
  document.getElementById("form_submit").value = "Submit";
  document.getElementById("form_clear").value = "Clear";
}
