// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
var yob = 1997;
var age = 2022-yob;
// 1st Meathod using if else
// if(age>=13 && age<=19){
//   console.log("Teenager");
// }else if(age>=20 && age<=29){
//   console.log("Twenties");
// }else{
//   console.log("neither teenager nor in twenties");
// }

// 2nd Meathod using turnery op
age >= 13 && age <= 19 ? console.log("Teenager") 
  : age >= 20 && age <= 29 ? console.log("Twenties") 
  :  console.log("neither teenager nor in twenties");