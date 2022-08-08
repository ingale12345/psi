// str = "Global String";
function global() {
  demo = "Demo Global";
  let str = "Local String";
  document.write(demo);
}
function Demo() {
  document.write(demo);
}
global();

Demo();
