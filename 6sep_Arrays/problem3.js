//Problem 3 : Given an array of numbers find the average of all the even numbers.

var arr = [12, 24, 86, 48, 10];
var sum = 0, count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sum += arr[i];
    count++;
  }
}
console.log(sum / count);