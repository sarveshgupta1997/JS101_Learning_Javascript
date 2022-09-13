// Problem 1 : Given a string count the number of words in that string 
// this will work if there is only one space between words

str = "Sarvesh Gupta is a handsome man";
let count=0;
for(i=0;i<str.length;i++){
  if(str[i]==" "){
    count++;
  }
}
if(str.length==0){
  console.log(0);  
}else{
  console.log(count+1);
}

// // this will work if there is multiple spaces between words

str1 = "Sarvesh    is a very handsome man period!";
let count1=0;
for(i=0;i<str1.length;i++){
  if(str1[i]==" "){
    if(str1[i+1]==" "){
      count1--;
    }
    count1++;
  }
}
if(str1.length==0){
  console.log(0);  
}else{
  console.log(count1+1);
}