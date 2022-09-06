// Prime no
// 1st meathod smallest and easiest way
var num=3;
let count=0;
for(var i=1; i<=num;i++){
  if(num%i==0){
    count++;
  }
}
count==2? console.log("Yes"):console.log("No");
console.log("\n");

// // Prime no from 1-100
// for(let j=1; j<=100; j++){
//   let count=0;
//   for(var i=1; i<=j;i++){
//     if(j%i==0){
//       count++;
//     }
//   }
//   if(count!==2){
//     continue;
//   }
//   console.log(j);
// }
// console.log("\n");



// 2nd meathod
var n=5, count=0;
for(var i=2; i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==1 && num!==1){
    console.log("Yes");
}else{
    console.log("No");
}
console.log("\n");

//3rd- meathod prime no
var number=7, is_true=true; // so that two is always prime
for(var i=2; i<num;i++){
    if(num%i==0){
        is_true=false;
    }
}
if(is_true){
    console.log("Yes");
}else if(num==1){
    console.log("No");
}else{
    console.log("No");
}


// -------------------------------------------------

// Factorial
var n = 5, fact = 1;
for (var i = 1; i <= n; i++) {
  fact *= i;
}
console.log("factorial of " + n + " is " + fact);
console.log("\n");

// -------------------------------------------------

// avg of odd natural numbers
var sum = 0, avg = 0, n = 21, count = 0;
for (var i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    sum += i;
    count++;
  }
}
avg = sum / count;
console.log(avg);
console.log("\n");

// -------------------------------------------------
// //1 - 2 - 3 - 4 - 5 -
var bag = "";
for (let i = 1; i <= 5; i++) {
  bag += i + " - ";
}
console.log(bag);


// -------------------------------------------------
// //1 - 2 - 3 - 4 - 5
bag = "";
for (let i = 1; i <= 5; i++) {
  bag += i;
  if (i == 5) {
    continue;
  }
  bag += " - ";
}
console.log(bag);
console.log("\n");

bag = "";
for (let i = 1; i <= 5; i++) {
  bag += i;
  if (i == 5) {
    break;
  }
  bag += " - ";
}
console.log(bag);
console.log("\n");

// -------------------------------------------------
// x 
// x x 
// x x x 
// x x x x 
// x x x x x
bag = "";
for (let i = 1; i <= 5; i++) {
  bag += "x" + " ";
  console.log(bag);
}
console.log("\n");

for (var i = 1; i <= 5; i++) {
  var bag = "";
  for (j = 1; j <= i; j++) {
    bag += "x ";
  }
  console.log(bag);
}
console.log("\n");


// -------------------------------------------------
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5 
for (var i = 1; i <= 5; i++) {
  var bag = "";
  for (j = 1; j <= i; j++) {
    bag += i + " ";
  }
  console.log(bag);
}
console.log("\n");

// -------------------------------------------------
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

bag = "";
for (let i = 1; i <= 5; i++) {
  bag += i + " ";
  console.log(bag);
}
console.log("\n");

for (var i = 1; i <= 5; i++) {
  var bag = "";
  for (j = 1; j <= i; j++) {
    bag += j + " ";
  }
  console.log(bag);
}
console.log("\n");

// -------------------------------------------------
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
var x = 1;
for (var i = 1; i <= 5; i++) {
  var bag = "";
  for (j = 1; j <= i; j++) {
    bag += x + " ";
    x++;
  }
  console.log(bag);
}
console.log("\n");