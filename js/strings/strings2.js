// count names starting with "A"
let arr= [ "Amit", "Ritesh", "Sarvesh", "Anjali", "Era", "Ajit"];

var count=0;
for(let i=0; i<arr.length; i++){
  if(arr[i][0]=="A"){
    count++;
  }
}
console.log(count);

// count names containing "a" or "A"
count=0;
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    if(arr[i][j]=="A" || arr[i][j]== "a"){
    count++;
      break;
    }  
    console.log(arr[i][j])
  }
  
}
console.log(count);