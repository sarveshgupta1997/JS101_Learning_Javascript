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
