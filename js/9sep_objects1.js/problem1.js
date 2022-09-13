

// // Problem 1 :
// // Given an array find the unique items in the array
// using object - because object only have uniques keys so we convert array values in =to objects keys so that they wont be repeated;

arr = ["suraj", "ramu", "sonu", "monu", "munnu", "sonu", "suraj"]
unique_list = {};

for (let i = 0; i < arr.length; i++) {
  unique_list[arr[i]] = 1;
}
console.log(unique_list);
for (let i in unique_list) {
  console.log(i);
}
console.log("\n")

// or pushing unique values in a new array

arr = ["suraj", "ramu", "sonu", "monu", "munnu", "sonu", "suraj"]
unique_list = {};
arr_unq = [];
for (let i = 0; i < arr.length; i++) {
  unique_list[arr[i]] = 1;
}
for (let i in unique_list) {
  arr_unq.push(i);
}
console.log(arr_unq);


// without using object not correct
// arr=[1,2,3,3,4,5,36,11,11];
// let bag="";
// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<arr.length; i++){
//     if(arr[i]!==arr[j]){
//        bag+= arr[i];

//     }
//   }
// }
// console.log(bag);
