window.onload = () => {
  let divs = document.getElementsByTagName("div");
  for (let div of divs) {
    div.onclick = show;
  }
};
let clicked = 1;
function show(e) {
  //   alert(e.target.innerHTML);
  let ul1;
  if (clicked == 1) {
    ul1 = document.createElement("ul");

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    li1.appendChild(document.createTextNode("LI1"));
    li2.appendChild(document.createTextNode("LI2"));
    li3.appendChild(document.createTextNode("LI3"));
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    ul1.appendChild(li3);
    alert("Demo");
    e.target.appendChild(ul1);
    clicked = 0;
  } else {
    alert(e.firstElementChild.innerHTML);
    clicked = 1;
  }
}
//------------------------------------------------------------
// var counter = 1;
// function showPolity() {
//   if (counter % 2 != 0) {
//     const top1 = document.createElement("span");
//     top1.innerHTML = "Salient Features of Constitution";
//     document.getElementById("polityDiv").appendChild(top1);

//     const top2 = document.createElement("span");
//     top2.innerHTML = "Fundamental Rights  ";
//     document.getElementById("polityDiv").appendChild(top2);

//     const top3 = document.createElement("span");
//     top3.innerHTML = "Fundamental Duties  ";
//     document.getElementById("polityDiv").appendChild(top3);

//     const top4 = document.createElement("span");
//     top4.innerHTML = "Directive Principles of state policy  ";
//     document.getElementById("polityDiv").appendChild(top4);

//     const top5 = document.createElement("span");
//     top5.innerHTML = "Judiciary  ";
//     document.getElementById("polityDiv").appendChild(top5);
//     counter++;
//   } else {
//     counter = 1;
//     let spans = document.getElementsByTagName("span");
//   }
// }
