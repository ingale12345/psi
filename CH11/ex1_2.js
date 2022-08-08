window.onload = () => {
  document.getElementById("bake").onclick = () => {
    console.log("Time to bake the cookies.");
    ((time) => {
      console.log("Baking the cookies.");
      setTimeout(() => {
        alert("Cookies are ready, take them out to cool.");
        console.log("Cooling the cookies.");
        setTimeout(() => {
          alert("Cookies are cool, time to eat!");
        }, 1000);
      }, time);
    })(2500);
  };
}; /*
var cookies = {
  instructions: "Preheat oven to 350...",
  bake: function (time) {
    console.log("Baking the cookies.");
    setTimeout(() => {
      alert("Cookies are ready, take them out to cool.");
      console.log("Cooling the cookies.");
      setTimeout(() => {
        alert("Cookies are cool, time to eat!");
      }, 1000);
    }, time);
  },
};
*/

