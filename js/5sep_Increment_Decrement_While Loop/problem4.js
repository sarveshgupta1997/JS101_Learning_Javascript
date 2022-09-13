// Problem 4: Print the average of even numbers from 1 to 100 (both included)

var start = 1;
var sum = 0;
var n=0; // no of time if condition is running so we can divide the sum by n for average

while (start <= 100) {
  if (start % 2 == 0) {
    sum += start;
    n++;
  }
  start++;
}
var average= sum/n;
console.log("average of even numbers from 1 to 100 is " + average);