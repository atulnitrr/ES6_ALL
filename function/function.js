console.log("function js");
/**
 1. Closuures 
 */

function fund(input) {
  return function () {
    return input * 2;
  };
}

var data = fund(100)();
var data2 = fund(300)();
console.log(data);
console.log(data2);
