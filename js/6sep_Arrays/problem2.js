// Problem 2 : Given a character in lower case print the upper case character
var char = "a";
var count = 0;
var arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arr2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == char) {
    console.log(arr2[i]);
    count++;
  }
}
if (count == 0) {
  console.log("Not a lower case alphabet from a-z");
}

// Problem 2 : Given a string in lower case print the upper case string
var str ="sarvesh", count=0, bag="";
for(let i = 0; i<str.length; i++){
  for(let j=0;j<arr1.length;j++){
    if(arr1[j]==str[i]){
      bag+=arr2[j];
     // console.log(bag);
    }
  }
}
console.log(bag);
console.log("\n");


// Problem 2 : Given a array of strings in lower case print the upper case character array
var str ="sarvesh" ;
var arr=["sarvesh", "ramesh", "suresh"];
var arr_new=[];  
for(k=0; k<arr.length;k++){
  bag="";
  for(let i = 0; i<arr[k].length; i++){
    for(let j=0;j<arr1.length;j++){
      if(arr1[j]==arr[k][i]){
        bag+=arr2[j];
       // console.log(bag);
      }
    }
  }
  arr_new.push(bag);
}
console.log(arr_new);
console.log("\n");