
function unitsConsumed(n) {
  var bill = n - 80, units = 0;
  if (0 <= bill && bill <= 150) {
    units = (bill / 3);
  } else if (150 < bill && bill <= 650) {
    units = ((bill - 150) / 5) + 50;
  } else if (bill > 650) {
    units = ((bill - 650) / 10) + 150;
  } else {
    console.log("units in -ve");
  }
  console.log(units);
}

// or 
let total = n - 80;
let count = 0;
let count1 = 0;
let count2 = 0;
for (let i = 1; i <= total; i++) {
  if (i > 650) {
    count++;
  }
  else if (i <= 650 && i > 150) {
    count1++;
  }
  else if (i <= 150) {
    count2++;
  }
}
count = count / 10;
count1 = count1 / 5;
count2 = count2 / 3;
console.log(count + count1 + count2);