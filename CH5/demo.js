function changeText() {
  //   let obj1 = document.getElementById("p1");
  //   obj1.innerHTML = "changed TExt";
  //   let div_element = document.getElementById("div_element");

  //   let new_element = document.createElement("p");
  //   let data = document.getElementById("Demo Text");
  //   new_element.appendChild(data);
  //   div_element.appendChild(new_element);

  //   var tag = document.createElement("p");
  //   var text = document.createTextNode("New Data");
  //   tag.appendChild(text);

  //   console.log(tag.getAttribute);
  //   var div_element = document.getElementById("div_element");
  //   div_element.appendChild(tag);

  let first_P = document.getElementById("p1");
  
  first_P.setAttribute("class", "blue");
  setTimeout(() => {
    first_P.setAttribute("class", "red");
  }, 3000);

  setTimeout(() => {
    first_P.removeAttribute("class");
  }, 5000);
}
