let nums = [56, -78, 12, 45, 23, -90];
sorted = new Array();
max = 0;
nums.forEach((value, index, arr) => {
  if (index == 0) {
    sorted[index] = value;
  } else {
    sorted.push(value);
    for (let i = 0; i < sorted.length; i++) {
      for (let j = i; j < sorted.length; j++) {
        if (sorted[i] > sorted[j]) {
          let temp = sorted[j];
          sorted[j] = sorted[i];
          sorted[i] = temp;
        }
      }
    }

    // sorted[index] = value;
    // if (sorted[index - 1] > value) {
    //   let temp = sorted[index - 1];
    //   sorted[index - 1] = value;
    //   sorted[index] = temp;
    // }
  }
});
console.log(sorted);
//console.log(nums);
