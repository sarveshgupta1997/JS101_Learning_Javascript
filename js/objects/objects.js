let obj= {name:"Sarvesh",age:25,is_married:false};
console.log(obj);

// deleting from object
delete obj.age;
console.log(obj);

obj= {name:"Sarvesh",age:25,is_married:false};
console.log(obj);

// Printing length of object
console.log(Object.keys(obj).length);
console.log(obj.length); // this will give undefined


// Printing Key values one by one
console.log(obj[0]);// this will give undefined
console.log(Object.keys(obj)[0]); 
console.log(Object.values(obj)[0]);

console.log(obj.name);
console.log(obj["name"]);
console.log(obj.age);
console.log(obj.is_married);

// Printing Key & values all at ones
console.log(Object.keys(obj));
console.log(Object.values(obj));


// Printing Key values by loop
for(let i=0; i<Object.keys(obj).length;i++){
  console.log(Object.keys(obj)[i], Object.values(obj)[i]);
}
console.log("\n");

let eng="Revetron";
let arr=["Sarvesh", "Rashmi","Tarun"];

// Empty object
var car={};
console.log(typeof(car));
car.name= "Sarvesh Gupta";
car["color"]="Dust Brown";
car.seats= ["1","2","3","4","5"];
car["model"]= 2016;
car.is_new= true;
car.engine= eng;
car.drivers=arr;
console.log(car);


for(let i=0; i<Object.keys(car).length; i++){
  console.log(Object.keys(car)[i] + " --> " + Object.values(car)[i]);
}

