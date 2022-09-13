// Problem 2: Print Prime Numbers from 1 to given limit

let n=50 ;
for(let i=1; i<=n; i++){
  let count=0;
  for(let j=1; j<=i ; j++){
    if(i%j==0){
      count++;
    }
  }
  if(count==2){
    console.log(i);
  }
}
console.log("\n");