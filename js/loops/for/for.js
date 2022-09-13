

// -------------------------------------------------

// Factorial
var n = 5, fact = 1;
for (var i = 1; i <= n; i++) {
  fact *= i;
}
console.log("factorial of " + n + " is " + fact);
console.log("\n");

// -------------------------------------------------

// avg of odd natural numbers
var sum = 0, avg = 0, n = 21, count = 0;
for (var i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    sum += i;
    count++;
  }
}
avg = sum / count;
console.log(avg);
console.log("\n");

// -------------------------------------------------
// //1 - 2 - 3 - 4 - 5 -
var bag = "";
for (let i = 1; i <= 5; i++) {
  bag += i + " - ";
}
console.log(bag);


// -------------------------------------------------
// //1 - 2 - 3 - 4 - 5
bag = "";
for (let i = 1; i <= 5; i++) {
  bag += i;
  if (i == 5) {
    continue;
  }
  bag += " - ";
}
console.log(bag);
console.log("\n");

bag = "";
for (let i = 1; i <= 5; i++) {
  bag += i;
  if (i == 5) {
    break;
  }
  bag += " - ";
}
console.log(bag);
console.log("\n");

