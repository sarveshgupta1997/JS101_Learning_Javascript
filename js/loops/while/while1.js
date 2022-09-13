
// for(var i=1; i<=4; i++){
//       console.log("* ".repeat(i));
//    }

// Print 1-100 side by side
var a= 1;
var bag="";
while(a<=100){
  bag=bag+ a + " ";
  a++;
}
console.log(bag);

// Print 1-100 next line
var a= 1;
while(a<=100){
  console.log(a);
  a++;
}

// Sum 1-100 
var a=1;
var sum=0;
while(a<=100){
  sum+=a;
  a++;
}
console.log(sum);

// Print 1-100 even numbers next line
var a=1;
while(a<=100){
  if(a%2==0){
    console.log(a);
  }
  a++;
}

// Print 1-100 even numbers side by side
var a= 1;
bag="";
while(a<=100){
  if(a%2==0){
    bag+=a+ " ";
  }
  a++
}
console.log(bag);

// Print 1-100 sum of even numbers
var a=0;
var sum=0;
while(a<=100){
  if(a%2==0){
    sum+=a;    
  }
  a++;
}
console.log(sum);

// Print 1-100 odd numbers next line
var a=0;
while(a<=100){
  if(a%2!==0){
    console.log(a);
  }
  a++;
}

// Print 1-100 even numbers side by side
var a=0;
bag="";
while(a<=100){
  if(a%2!==0){
    bag+=a+ " ";
  }
  a++;
}
console.log(bag);

// Print 1-100 sum of even numbers
var a=0;
sum=0;
while(a<=100){
  if(a%2!==0){
    sum+=a;
  }
  a++;
}
console.log(sum);

