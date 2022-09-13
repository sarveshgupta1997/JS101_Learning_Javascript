const { error } = require("console")

car = {
  name: 'Sarvesh Gupta',
  color: 'Dust Brown',
  seats: ['1', '2', '3', '4', '5'],
  model: 2016,
  is_new: true,
  engine: 'Revetron',
  drivers: ['Sarvesh', 'Rashmi', 'Tarun']
}


// i or any variable represents keys in the objects

// Note we can not use dot notation in for in loop for example - console.log(i, car.i]); will give undefined

// Note we can use "" for printing values in brackets in for in loop for ex = console.log(x, car["x"]); this will gove error  - 
//   so for values we have to use without interveted "" in bracket notation
for (let x in car) {
  console.log(x, car[x]);
}