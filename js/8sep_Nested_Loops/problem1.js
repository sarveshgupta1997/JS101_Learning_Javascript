// Problem 1: Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// 31-1
// .
// 31-12

printing with 31 days in every month

for(let i=1; i<=12; i++){
  for(let j=1; j<=31; j++){
    console.log(j+"-"+i);
  }
  console.log("\n");
}


// printing with actual no of days in every month

var days;
for(let i=1; i<=12; i++){
  if( i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==11 || i==12 ){
    days=31;
  }
  else if(i==2){
    days= 28;
  }
  else{
    days= 30;
  }
  for(let j=1; j<=days; j++){
    console.log(j+"-"+i);
  }
  console.log("\n");
}
