function makePhrases() {
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
  let arr2 = [
    "Prajwal",
    "Shubham",
    "Nitin",
    "Shidhesh",
    "Rohit",
    "Valmik",
    "Rushi",
  ];
  let arr3 = [
    "Pune",
    "Karegaon",
    "Shrirampur",
    "Mumbai",
    "Goa",
    "Ahmadnagar",
    "Nashik",
  ];

  let str = "";
  let ans1 = arr1[Math.floor(Math.random() * 8)] + " ";
  let ans2 = arr2[Math.floor(Math.random() * 7)] + " ";
  let ans3 = arr3[Math.floor(Math.random() * 7)];
  str = ans1 + " " + ans2 + " " + ans3;
  console.log(str);
  console.log(`${ans1} ${ans2} ${ans3}`);
}
makePhrases();
