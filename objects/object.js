console.log("Object js");
/*
No of ways to create java script object
1. Object literal 
2. Object constructor. 
3. Object.create() --> it set prototype to Object
*/

/*
var person = {
  name: "atul",
  greet() {
    console.log("greet");
  },
};

var anotherPerson = Object.create(person);
console.log(Object.getPrototypeOf(anotherPerson) == person);
*/
/*
var person = {
  name: "atul",
  greet() {
    console.log("Hello " + this.name);
  },
};

var anotherObject = Object.create(person);
anotherObject.greet();
*/
/*
let person = {
  name: "atul",
  age: 25,
};

Object.prototype.greet = function () {
  console.log("Greet funtion " + this.name);
};

var anotherPerson = Object.create(person);
console.log(anotherPerson);
console.log(anotherPerson.name);
console.log(anotherPerson.age);
var tt = anotherPerson.greet;
tt.call(anotherPerson);
*/

/*
var person = {
  name: "atul",
  age: 23,
};

Object.prototype.greet = function () {
  console.log("Hello in proto");
};


person.greet();
console.log(person);
// console.log(person.__proto__);
// console.log(person.toString());
*/
/*
var peson = {
  name: "atul",
  age: 12,
};
var anotherPerson = Object.create(peson);
anotherPerson.name = "eee";
console.log(anotherPerson.age);
console.log(anotherPerson);
*/
/*
var person = {
  name: "atul",
};

var anotherPerson = new Object();
anotherPerson.name = "kk";
console.log(person);
console.log(anotherPerson);

*/

/*
var person = {
  name: "atul",
  "first-name": "dd", // here for sepperator we can use string
  age: 27,
  details: {
    hobbies: ["detail", "cooling"],
    location: "india",
  },
  greet() {
    console.log(`hello i  am ${this.name} age ${this.age}`);
  },
};

person.greet();

console.log(person);
*/
/*
var person = {
  name: "atul",
  "first-name": "dd", // here for sepperator we can use string
  age: 27,
  details: {
    hobbies: ["detail", "cooling"],
    location: "india",
  },
  greet() {
    console.log("hello ");
  },
};

person.greet();
console.log(person["first-name"]);
console.log(typeof person);
console.log(person);
console.log(person.details.hobbies);
console.log(person.name);

var fiedlName = "name";
console.log(person[fiedlName]);

*/
