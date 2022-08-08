let scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];
let costs = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
  0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];

// function bubbles() {
//   let scores = [
//     60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
//     64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
//   ];
//   let costs = [
//     0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22,
//     0.31, 0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2,
//     0.25, 0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
//   ];
// }
function printAllScores_and_Max_Value(scores) {
  let max = 0;
  for (let i = 0; i < scores.length; i++) {
    if (max < scores[i]) {
      max = scores[i];
    }
    console.log(`Index[${i}]=${scores[i]}`);
  }
  return max;
}

let max = printAllScores_and_Max_Value(scores);
console.log(
  `Total No of Elements are ${scores.length} and\nMax Score is= ${max}`
);

function printMaxValuePOSTIONS_and_Optimum_Solution(costs, scores, max) {
  let min_cost = 9999999;
  let min_cost_pos = -1;
  console.log(`max Value ${max} is present at positions given below:`);
  for (let i = 0; i < scores.length - 1; i++) {
    if (max == scores[i]) {
      console.log(`${i}`);
      if (costs[i] < min_cost) {
        min_cost = costs[i];
        min_cost_pos = i;
      }
    }
  }
  console.log(
    `Optimum solution = With  max value ${max} and min cost =${min_cost} at postion ${min_cost_pos}`
  );
}
printMaxValuePOSTIONS_and_Optimum_Solution(costs, scores, max);
// bubbles();
