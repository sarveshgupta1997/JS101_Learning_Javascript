// Greatest/Maximum & Smallest/Minimun value from an Array

var arr = [25, 5, 98, 865, 16, 85, 16, 48, 51];

// 1st meathod 
console.log(Math.min(...arr));
console.log(Math.max(...arr));

// Greatest/Maximum value from Array
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

// Smallest/Minimun value from Array
let min = Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);
