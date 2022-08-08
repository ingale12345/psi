/*window.onload = () => {
  let images = document.getElementsByTagName("img");

  for (let i = 0; images.length; i++) {
    images[i].onclick = changeImage;
  }
};
function changeImage(e) {
  let str = e.target.getAttribute("src") + "";
  e.target.setAttribute("src", str.replace("blur", ""));
  e.target.style = "cursor:none";

  setTimeout(
    (e) => {
      console.log("Welcome " + e.target.getAttribute("src"));
      let str = e.target.getAttribute("src") + "";
      e.target.setAttribute("src", str.replace(".j", "blur.j"));
      e.target.style = "cursor:auto";
    },
    2000,
    e
  );
}
*/

window.onload = () => {
  let images = document.getElementsByTagName("img");
  for (let image of images) {
    image.onclick = () => {
      let id = image.id;
      image.src = "./img/" + id + ".jpg";
      setTimeout(() => {
        image.src = "./img/" + id + "blur.jpg";
        console.log(image.src);
      }, 2000);
    };
  }
};
