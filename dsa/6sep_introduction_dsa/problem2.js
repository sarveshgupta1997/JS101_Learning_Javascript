// Problem 2
// Fix the given flowchart.
// Below is the flowchart of computing the following sum :
//  0 + 5 + 10 + 15 + 20 ......


corrections:-
line 1 - no input taken
line 2 - no need for j variable
line 3 - sum= sum + (i*5);

let n=10;
let sum=0;
for(let i=0; i<n; i++){
  sum+=i*5;
}
console.log(sum);
 
