const points = [40, 100, 1, 5, 25, 10];

let maxNum = Math.max.apply(null, points);
document.write(maxNum);
let maxMin = Math.min.apply(null, points);
document.write("<br>" + maxMin);
