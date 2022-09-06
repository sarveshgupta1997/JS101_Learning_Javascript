
a = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
// or write as 
b = [10, 11, 12, 13];
c = ["Sarvo", 13, 12, 1, true];
console.log(b[3]);
console.log(c[c.length - 1]);
console.log(b);
console.log(b.length);

//change array value;
c[1] = 3;
console.log(c);

// new empty array
arr = [];
console.log(arr);
arr.push(1, 2, 3);
console.log(arr);

for (i = 0; i < 10; i++) {
  arr.push(i + 1);
}
console.log(arr);


//adding value to array at last
x = [0, 2, 5, "sarvo", true];
x.push(9);
console.log(x);

//adding value to start of an array
x = [0, 2, 5, "sarvo", true];
x.unshift("Ramesh");
console.log(x);

//remove value to array at last
x.pop();
console.log(x);

//remove value to array at starting or first place
x.shift();
console.log(x);

// finding index of an element present in array
y = [2, 5, 4, 54, 4, 5, 56, 21, 565, 656, 565];
pos = y.indexOf(54);
console.log(pos);

// index of return -1 when element is not presnt in an array
console.log(y.indexOf(66));
y.indexOf("4545") === -1 ? console.log("4545 does not exits in array") : console.log("4545 is in array");

// printing an array with loop
var names = ["Sarvesh", "Rashmi", "Pinki", "Krishan"];
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("\n");
for (i = 0; i < names.length; i++) {
  console.log((i + 1) + ". " + names[i]);
}

// changeing value inside an array with loop
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < num.length; i++) {
  num[i] = num[i] * 10;
}
console.log(num);