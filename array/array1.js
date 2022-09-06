// multiplication table of an element of array
arr = [1, 2, 3, 4, 5];
bag = "";
for (i = 1; i <= 10; i++) {
  console.log(arr[3] + " X " + i + " = " + arr[3] * i);
}
console.log("\n");


// multiplication table of all elements of array
arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(arr[i] + " X " + j + " = " + arr[i] * j);
  }
  console.log("\n");
}

//insted of an element add another in array
var change_from = 4;
var change_to = 44;

arr11 = [1, 2, 3, 4, 5];
for (var i = 0; i < arr11.length; i++) {
  if (arr11[i] === change_from) {
    arr11[i] = change_to;
    break;
  }
}
console.log(arr11);
console.log("\n");

// delete last n elements of array
var n = 3
arr12 = [1, 2, 3, 4, 5, 6];
for (var i = 1; i <= n; i++) {
  arr12.pop();
}
console.log(arr12);

//printing array value except some values
// print all movies except pushpa and avengers
let arr13 = ["Bahubali", "KGF", "Pushpa", "Iron Man", "Avengers"];
for (var i = 0; i < arr13.length; i++) {
  if (arr13[i] == "Pushpa" || arr13[i] == "Avengers") {
    continue;
  }
  console.log(arr13[i]);
}