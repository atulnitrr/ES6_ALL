console.log("event js");

/**
 * 1. window.onload
 * 2. bt.onclick -->? have issue when you have multipe function to call
 * 3. event handler vs event listener
 * 4. event listner
 * 5. event.stopProgation()
 * 6. event.target, clientX, clientY
 */

/*
var checkBox = document.querySelector("#check");
checkBox.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
});
console.log(checkBox);
*/
/*
var array = [1, 2, 3];
var dd = array.includes(2);
console.log(dd);

var inner = document.querySelector(".inner");
inner.addEventListener("click", (event) => {
  console.log("postion", event.clientX, event.clientY);
  var classes = event.target.classList;
  var redPreseent = Array.from(classes).some((e) => Object.is(e, "red"));

  if (redPreseent) {
    classes.remove("red");
  } else {
    classes.add("red");
  }
});

*/
/*
var inner = document.querySelector("#inner");
var outer = document.querySelector("#outer");
inner.addEventListener(
  "click",
  (event) => {
    console.log(event.bubbles);
    event.stopPropagation();
    console.log("inner");
  },
  true
);

outer.addEventListener(
  "click",
  () => {
    console.log("Outer");
  }
  // true
);
*/

/*
var btn = document.querySelector("button");

function listner(event) {
  console.log("listiner 1");
}
btn.addEventListener("click", listner);

btn.addEventListener("click", () => {
  console.log("listener2");
});

setTimeout(() => {
  btn.removeEventListener("click", listner);
}, 2000);
*/
/*
window.onload = () => {
  console.log("Window loaded");
};

var btn = document.querySelector("button");
btn.onclick = () => {
  console.log("button clicked");
};

// this will overrite the previous one
btn.onclick = () => {
  console.log("Second function -->");
};

*/
