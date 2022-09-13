// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit


var start = 0;
var end = 20;
sum = 0;
while (start <= end) {
  if (start % 3 == 0) {
    sum += start;
  }
  start++;
}
console.log(sum);