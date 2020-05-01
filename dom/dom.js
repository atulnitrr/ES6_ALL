console.log("dom js");

/**
 * 1. location, document,
 * 2. local storage vs session storage
 * 3. location, replace and reload
 * 4. document
 * 5. firstChild (can give u whitespace )vs firstElementChild (will give you element)
 * 6. getElement by id -->? ok way
 * 7. Query selector -> best way
 * 8 . Create a new elements
 * 9. Remove mthod in
 */

var a = document.querySelectorAll("a")[1];
a.parentElement.removeChild(a);
// a.remove(); // new browser

/*
var p = document.createElement("P");
p.textContent = "hello there";
var h = document.querySelector("h1");
console.log(h);
*/
// h.insertAdjacentElement(1, p);
// h.appendChild(p);

/*
var p = document.createElement("P");
p.textContent = "Hello atul";
p.style.fontSize = "17px";
var li = document.querySelector("li");
// li.appendChild(p);
console.log(p);
var ul = document.querySelector("ul");
// ul.insertBefore(p, li);
li.insertAdjacentElement(p);
*/
/*
document.querySelector("a").style.backgroundColor = "green";
document.querySelector(
  "ul"
).lastElementChild.firstElementChild.style.backgroundColor = "Red";
*/

/*
console.log(document.querySelector("h1"));
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll(".simple"));
console.log(document.querySelector(".simple"));
console.log(document.querySelectorAll("#testdata"));
*/
/*
var res = document.getElementsByTagName("li");
for (const iterator of res) {
  console.log(iterator);
}
console.log(res);

console.log(document.getElementsByClassName("simple"));
console.log(document.getElementById("testdata"));
*/
/*
console.log(document.body.firstElementChild.firstElementChild.parentElement);
console.log(document.body.firstElementChild.firstElementChild);

console.log(
  document.body.firstElementChild.firstElementChild.nextElementSibling
);

*/
/*
console.log(document.body.firstChild); // white space
console.log(document.body.firstElementChild); // non white space
console.log(document.body.lastElementChild);

*/

/*
console.log(document.URL);
console.log(document.title);
console.log(document.baseURI);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0]);
*/
// console.log(document.body.children[0].textContent);
// console.log(document.body.children[0].tagName);

// document.body.children[0].textContent = "99999";
// document.body.children[0].textContent = "99999";
// document.body.children[0].style.backgroundColor = "green";

/*
console.log(location);
console.log(location.host);
console.log(location.hostname);
console.log(location.pathname);

*/
// location.reload();
// location.replace("http://www.google.com");
/*
localStorage.setItem("key1", "data");
console.log(localStorage.getItem("key1"));

sessionStorage.setItem("key1", "mmmm");
console.log(sessionStorage.getItem("key1"));

console.log(window.location);
console.log(window.document);
*/
// session storage is removed when window is closed

/*
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

*/
