var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

function sortArray() {
  products.sort(function (a, b) {
    // return a[1] - b[1];
    if (a["calories"] < b["calories"]) {
      return -1;
    }
    if (a["calories"] > b["calories"]) {
      return 1;
    }

    return 0;
  });
  console.log(products);
  setTimeout(() => {
    products.sort(function (a, b) {
      // return a[1] - b[1];
      if (b["sold"] < a["sold"]) {
        return -1;
      }
      if (b["sold"] > a["sold"]) {
        return 1;
      }

      return 0;
    });
    console.log(products);
  }, 0);
  //   products.sort((a, b) => {
  //     return a[1] - b[1];
  //   });
  //   alert("sorted");
}
sortArray();
