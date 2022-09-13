



a = "Sarvesh Gupta";
console.log(a);
console.log(a[9]);
console.log(a.length);

// slice - from a startpostiion to another postition
// slice(start, end)
console.log(a.slice(8, 13));
// omit the second parameter, the method will slice out the rest of the string:
console.log(a.slice(8));
// -ve will start the position from end. count starting from 1
console.log(a.slice(-10, -6));

//substring(start, end)
// substring from a startpostiion to another postition but if start and end values less than 0 are treated as 0
console.log(a.substring(8, 13));
console.log(a.substring(-8, -5));// both will be treated as 0
// omit the second parameter, the method will print the rest of the string:
console.log(a.substring(8));

//substr(start, length)
// substr() is similar to slice()
// The difference is that the second parameter specifies the length of the extracted part.
console.log(a.substr(3, 2));
// -ve will start the position from end. count starting from 1
console.log(a.substring(-8, 4));
// omit the second parameter, the method will print the rest of the string:
console.log(a.substr(8));

//replace()
// replace() method does not change the string it is called on.
// The replace() method returns a new string.

str = "Please visit Faridabad and Delhi";
str = str.replace("Faridabad", "Ballawgarh");
console.log(str);

// The replace() method replaces only the first match
str1 = "Please visit Faridabad and Delhi, but Faridabad wins";
str1 = str1.replace("Faridabad", "Ballawgarh");
console.log(str1);

// To replace all matches, use a regular expression with a /g flag 
str1 = "Please visit Faridabad and Delhi, but Faridabad wins";
str1 = str1.replace(/Faridabad/g, "Ballawgarh");
console.log(str1);

//replace() method is case sensitive , trying to replace with diffrent case  does not work - that we will use /i flag
str = "Please visit Faridabad and Delhi";
str = str.replace("FARIDABAD", "Ballawgarh");
console.log(str);
// /i flag to case insensitve letter
str = str.replace(/FARIDABAD/i, "Ballawgarh");
console.log(str);