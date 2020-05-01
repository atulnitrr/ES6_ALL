console.log("function js");
/**
 1. Closuures 
 2. IIFE --> why need this, local scope dont mess with global variable
 3. Built in methods 
 */

function fund(mess, numbers) {
  console.log(mess);
  console.log(arguments);
}

fund("aaarr", 34);

console.log(fund.length); // no of argument epect

console.log(fund.name);

var msg = function (message) {
  console.log(message);
};
console.log(msg.name);

function fun2() {
  console.log(this.name);
}

fun2();
/*
function fun() {
  var dd = 90;
}

((a) => {
  console.log(a);
})(23);
*/

/*
function fund(input) {
  return function () {
    return input * 2;
  };
}

var data = fund(100)();
var data2 = fund(300)();
console.log(data);
console.log(data2);

*/
