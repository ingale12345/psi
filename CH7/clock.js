let interval;
document.getElementById("btn").onclick = (e) => {
  if (e.target.innerHTML == "Start") {
    interval = setInterval(() => {
      document.getElementById("demo").innerHTML =
        new Date().toLocaleTimeString();
    }, 1000);
    e.target.innerHTML = "Stop";
  } else if (e.target.innerHTML == "Stop") {
    clearInterval(interval);
    e.target.innerHTML = "Start";
  } else {
    alert("dont inspect");
  }
};
setInterval(() => {
  document.getElementById("demo1").innerHTML = new Date().toLocaleTimeString();
}, 1000);
