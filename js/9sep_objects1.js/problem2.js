// // Problem 2 :
// // Given a string print, the number of times each character appears

// using object

//check if character i is present at key value in obj
//if it is not present then we will push i as key in obj with value 1
// else there is already one i as key is present in obj and we will increase its value's count by 1 as it is repeating

str="banana";
obj={};
for(let i=0;i<str.length; i++){
  if(obj[str[i]] == undefined){
    obj[str[i]]=1;
  }else{
    obj[str[i]]++;
  }
}
console.log(obj);