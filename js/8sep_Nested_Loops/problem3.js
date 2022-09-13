// Problem 3: Print a box patterns using *
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

let n=10;
for(let i=1; i<=n; i++){
  if(i==1 || i== n){
    console.log("**********")
  }else{
    console.log("*        *")
  }
}