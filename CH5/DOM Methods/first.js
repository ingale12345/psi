// {
//   let obj = document.getElementById("welcomeText ");
//   console.log(obj);
//   console.log(obj.innerHTML);
//   setTimeout(() => {
//     obj.setAttribute("style", "color:red");
//     obj.innerHTML = "Thanks for Visiting page";
//   }, 2000);
//   let body = document.getElementsByTagName("body");
//   console.log(body[0]);
// }

function ActionDemo() {
  //   document.body;
  let element = document.body;
  //element.setAttribute("align", "center");
  console.log(document.body);

  console.log("URI=" + document.documentURI);
  console.log("");
  console.log("Domain/Server Ip Address=" + document.domain);
  console.log("Modified Documents" + document.lastModified);
  console.log("loading status=" + document.readyState);
  console.log(
    "Returns the URI of the referrer (the linking document)\n" +
      document.referrer
  );
  console.log("Title=" + document.title);
  console.log("URL=" + document.URL);
}
