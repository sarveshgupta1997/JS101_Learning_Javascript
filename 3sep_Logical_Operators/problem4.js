// Problem 4: Given 3 numbers (all different values), print which is greatest

var num1 = 111;
var num2 = 222;
var num3 = 333;

// 1st Meathod using if-else
// if(num1 > num2 && num1 > num3){
//   console.log("num1 is greatest");
// }else if(num2 > num1 && num2 > num3){
//   console.log("num2 is greatest");
// }else{
//   console.log("num3 is greatest");
// }

// 2nd Meathod using turnery op
num1 > num2 && num1 > num3? console.log("num1 is greatest")
  : num2 > num1 && num2 > num3? console.log("num2 is greatest")
  :console.log("num3 is greatest");