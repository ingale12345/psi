function widget(partNo, size) {
  this.no = partNo;
  this.breed = size;
}
function FormFactor(material, widget) {
  this.material = material;
  this.widget = widget;
  // return this;
}
var widgetA = widget(100, "large");
var widgetB = new widget(101, "small");
var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new FormFactor("metal", widgetB);
console.log(formFactorA);
console.log(formFactorB);
