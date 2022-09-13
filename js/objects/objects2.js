// accesing arrays from objects
car= {
  name: 'Sarvesh Gupta',
  color: 'Dust Brown',
  drivers: [ 'Sarvesh', 'Rashmi', 'Tarun' ]
}

// accessing array element from array
console.log(car.drivers[0]);
console.log(car["drivers"][1]);

// adding to array in objects
car.drivers[3]= "Ramesh";
car.drivers.push("Sunil");
console.log(car);