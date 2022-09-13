// this 
// this means this object (inside this object) example this.birthyear means the birthyear of john(key in the same object)
// and this.age means that age of employee is this

let obj = {
  name: 'Sarvesh Gupta',
  birthyear: 1997,
  seats: ['mummy', 'papa', 'didi', 'eru'],
  age: function() {
    this.age = 2022 - this.birthyear;
  }
}
console.log(obj);
obj.age();
console.log(obj);

console.log("\n");

// using function inside object example
obj = {
  name: "",
  age: "",
  sex: "",
  getdata: function(n, a, s) {
    nam = n;
    ag = a;
    sx = s;
  },
  showdata: function() {
    console.log("Name = " + nam);
    console.log("Age = " + ag);
    console.log("Sex = " + sx);
  }
}
console.log(obj);
obj.getdata("Sarvesh", "25", "Male");
obj.getdata("Rashmi", "27", "Female");
obj.showdata();
console.log(obj);
