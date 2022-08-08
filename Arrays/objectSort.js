let student = [
  { name: "Omkar", age: 22 },
  { name: "Rushi", age: 23 },
  { name: "Yohesh", age: 20 },
  { name: "Atul", age: 27 },
  { name: "Mahesh", age: 25 },
];

student.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  //   return a.name.toLowerCase() - b.name.toLowerCase();
});
console.log(student);
