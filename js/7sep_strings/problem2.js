// Problem 2 : Given an array of string count the overall total number of characters

// this condition will work if strings do not have space in them, but if there are spaces present in them it will count them as a character too
let arr = ["Amit", "Ramesh", "Sarvesh"];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  count += arr[i].length;
}
console.log(count);

// this condition will work even if strings have spaces in them, if there are spaces present in them it will not count them as a character.
let arr1 = ["Am  it", "Rame sh", "Sar  vesh"];
let count1 = 0;
for (let i = 0; i < arr1.length; i++) {
  for(j=0;j<arr1[i].length;j++){
    if(arr1[i][j]==" "){
      count1--;
    }
  }
  count1 += arr1[i].length;
}
console.log(count1);