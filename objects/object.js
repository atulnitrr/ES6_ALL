console.log("Object js");
/*
No of ways to create java script object
1. Object literal 
2. Object constructor.   new Object();
3. Object.create() --> it set prototype to Object
4. Constructor function --> 
5. Bind you are binding this value and may call later 
*/

/*
var person = {
  name: "autl",
  greettt() {
    console.log(this);
  },

  greetFat: () => {
    console.log(this);
  },
};

person.greettt();
person.greetFat();
// console.log(person);
*/
/*
var person = {
  name: "Atul",
  greet: function (message1, message2) {
    console.log(this);
    console.log(`Hello ${this.name} ${message1} ${message2}`);
  },
};

// person.greet("hello", "dama");
let gt = person.greet;
// gt("hello", "dama");
// gt.bind(person, "hello", "dama")();
// gt.call(person, "hello", "dama");
gt.apply(person, ["hello", "dama"]);
*/
/*
function fn(message, message2) {
  console.log(message, message2, this);
}

var obj = {
  fun: fn,
};
var person = {
  name: "atul",
};

obj.fun.apply(person, ["call1"]);
// obj.fun.call(person, "call", "call2");
// obj.fun.bind(person, "tada", "kk")();
// obj.fun("dd");
*/

/*
function fn() {
  console.log(this);
}

var obj = {
  name: "atul",
  fun: fn,
};

// obj.fun(); // it will revfer obj
// obj.fun.bind(this)();

var person = {
  name: "atul",
};

obj.fun.bind(person)();
*/
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("atul", 56);
var person2 = new Person("amit", 66);
console.log(person1, person2);
*/
/*

function Person() {
  this.name = "atul";
  this.age = 34;
  this.greet = function () {
    console.log(`Hello in am ${this.name} age ${this.age}`);
  };
}

Person.prototype.greetGeneral = function () {
  console.log("Hello general");
};

var person = new Person();
person.name = "ana";
person.greet();
person.greetGeneral();
var anotherPerson = new Person();
anotherPerson.greet();
anotherPerson.greetGeneral();

console.log(person instanceof Person);
*/
/*
function Person() {}
Person.prototype.greet = function () {
  console.log("Data");
};

var person = new Person();
person.greet();
console.log(person);
console.log(Person.prototype);
console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person) == Person.prototype);
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
