console.log("Event http js");

const url = "https://jsonplaceholder.typicode.com/posts/1";
const method = "GET";

function loadData(url, method) {
  return new Promise((resolve, reject) => {
    var http = new XMLHttpRequest();
    http.open(method, url);
    http.onreadystatechange = () => {
      if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        resolve(JSON.parse(http.responseText));
      } else if (
        http.readyState === XMLHttpRequest.DONE &&
        http.status !== 200
      ) {
        reject("Something bad happend");
      }
    };
    http.send();
  });
}

const URL = "https://jsonplaceholder.typicode.com/posts";
loadData(URL, method)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

/*
var http = new XMLHttpRequest();
http.open(method, url);
http.onreadystatechange = () => {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    var res = http.responseText;
    var resJosn = JSON.parse(res);
    console.log(res);
    console.log(resJosn);
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
  }
};
http.send();

*/

/*
function getData(url) {
  return new Promise((resolve, resject) => {
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.onreadystatechange = function () {
      if (http.readyState === XMLHttpRequest.DONE && http.status == 200) {
      }
    };
    http.send();
  });
}

*/
