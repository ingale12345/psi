function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = () => {
    if (this.ounces == 8) return "small";
    if (this.ounces == 12) return "Medium";
    if (this.ounces == 16) return "large";
  };
  this.toString = () => {
    return `You’ve ordered a ${this.getSize()} House Blend coffee.`;
  };
}
let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
let darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());
