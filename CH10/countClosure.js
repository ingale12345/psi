function getCount() {
  let count = 0;

  function counter() {
    count = count + 1;
    return count;
  }
  return counter;
}
let cnt = getCount();
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
