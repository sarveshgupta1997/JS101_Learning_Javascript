// Modifing string withouth replace();
//change R to D 
str = "Ronald";
// below meathod will not work because string can not be mutated
str[0] = "D";
console.log(str);

// so we use this meathod
var bag = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == "R") {
    bag += "D";
  } else {
    bag += str[i];
  }
}
console.log(bag);


// but above meathod will change all the R present in string
// for example if we change "s" to "P" in "sarvesh" then both the "s" will be changed to "p" output - "parveph"
// for only changing char only first time

str = "Sarvesh";
var bag = "", count=0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == "S") {
    bag += "P";
    c
  } else {
    bag += str[i];
  }
}
console.log(bag);