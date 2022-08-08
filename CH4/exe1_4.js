let products = ["choo choo chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];
let i = 0;
while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(`${products[i]} Contains Bubble gum`);
  }
  i = i + 1;
}
