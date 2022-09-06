// Problem 1
//Read the flowchart and predict output for given inputs.
// - Submit predicted outputs for inputs : 4, 7, 9
// - Extension: Can you figure out what is this algorithm for?

let sum = 0, previous_sum = 0, n = 7, current_num = 0;
for (let current_num = 0; current_num <= n; current_num++) {
  previous_sum = sum;
  sum = current_num + previous_sum;
}
console.log(sum);

// when n = 4 , output will be 10
// when n = 7 , output will be 28
// when n = 9 , output will be 45
