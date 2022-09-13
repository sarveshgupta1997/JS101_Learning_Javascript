// spread oprator - spreading of an array inside an array
var arr1 = [1, 2, 3, 4];
console.log(arr1);
var arr2 = [...arr1, 5, 6];
console.log(arr2);
var arr21 = [5, 6, ...arr1];
console.log(arr21);
var arr3 = [1, 2, 3, ...arr1, 5, 6, 7];
console.log(arr3);
var arr4 = [1, 2, 3, ...arr3];
console.log(arr4);

// copping array
arr5= [...arr1];
console.log(arr5);

//joining two array
arr6=[1,2,3];
arr7=[4,5,6];
arr8=[arr6, arr7];  // this will add two arrays seprately
arr8=[...arr6, ...arr7];  //  add/concatinate two arrays together
console.log(arr8); 


// array inside an array

arr = [
  ["sarvesh", "Rashmi", "Era"],
  [1, 2, 3, 4],
  [true, false, true, true, false]
]
console.log(arr);
console.log(arr[1]);
console.log("\n");

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
  console.log("\n");
}


for (var i = 0; i < arr.length; i++) {
  var bag = "";
  for (var j = 0; j < arr[i].length; j++) {
    bag += arr[i][j] + ", ";
  }
  console.log(bag);
}