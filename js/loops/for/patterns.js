


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


// -------------------------------------------------
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

// printing for given n rows
let rows=10;
for(let i=1; i<=rows; i++){
  bag="";
  for(let j=1; j<= 10; j++){
    if(i==1 || i==rows){
      bag+="*";
    }else if(j==1 || j==10 ){
      bag+="*";      ;
    }else{
      bag+=" ";
    }
  }
  console.log(bag);
}

// printing for given n rows & n columns
let row=15, col=13;
for(let i=1; i<=row; i++){
  bag="";
  for(let j=1; j<= col; j++){
    if(i==1 || i==row){
      bag+="*";
    }else if(j==1 || j==col ){
      bag+="*";      ;
    }else{
      bag+=" ";
    }
  }
  console.log(bag);
}
console.log("\n");


// -------------------------------------------------
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 

num= 5;
for(let i=1; i<=num; i++){
    let bag="";
    for(let j=1; j<=num; j++){
        bag+= j+" "
    }
    console.log(bag);
}
console.log("\n");


// -------------------------------------------------


// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

n=5;
for(let i=1; i<=n; i++){
    let bag="";
    for(let j=1; j<=n; j++){
        bag+= "* "
    }
    console.log(bag);
}
console.log("\n");


// -------------------------------------------------


// 1
// *
// 1 2
// * *
// 1 2 3
// * * *
// 1 2 3 4 
// * * * *
// 1 2 3 4 5
// * * * * *

n = 5;
for (let i = 1; i <= n; i++) {
  let bag = "", bag1 = "";
  for (let j = 1; j <= i; j++) {
    bag += j + " ";
    bag1 += "* ";
  }
  console.log(bag);
  console.log(bag1);
}
console.log("\n");


// -------------------------------------------------

console.log("\n");


// -------------------------------------------------

console.log("\n");


// -------------------------------------------------
console.log("\n");


// -------------------------------------------------
console.log("\n");


// -------------------------------------------------
console.log("\n");


// -------------------------------------------------

console.log("\n");


// -------------------------------------------------

console.log("\n");


// -------------------------------------------------
console.log("\n");


// -------------------------------------------------
