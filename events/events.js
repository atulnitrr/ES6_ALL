console.log("event js");

/**
 * 1. window.onload
 * 2. bt.onclick -->? have issue when you have multipe function to call
 * 3. event handler vs event listener
 * 4. event listner
 */

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
