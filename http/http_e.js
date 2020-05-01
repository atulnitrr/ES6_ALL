console.log("Event http js");
/**
 * 1. Get request
 * 2. Post request
 * 3. fetch
 *
 */

/*

var url = "https://jsonplaceholder.typicode.com/posts";
const post_method = "POST";

function postData(method, url, data) {
  return new Promise((resolve, reject) => {
    var http = new XMLHttpRequest();
    http.open(method, url);
    http.onreadystatechange = () => {
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(http.responseText);
        resolve(JSON.parse(http.responseText));
      } else if (
        http.readyState === XMLHttpRequest.DONE &&
        http.status !== 201
      ) {
        reject("Some exception " + http.responseText);
      }
    };
    http.send(JSON.stringify(data));
  });
}

var data = {
  title: "tt",
  body: "foo",
  userId: 23,
};
postData(post_method, url)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

  */

/*
var http = new XMLHttpRequest();
var data = {
  title: "tt",
  body: "foo",
  userId: 23,
};
http.open(post_method, url);
http.setRequestHeader("Content-Type", "application/json");
http.onreadystatechange = () => {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
    console.log(JSON.parse(http.responseText));
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
    console.log(http);
    console.log("some issue");
  }
};
http.send(JSON.stringify(data));
*/

/*
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
        console.log(http);
        reject("Something bad happend --> " + http.responseText);
      }
    };
    http.send();
  });
}

const URL = "https://jsonplaceholder.typicode.com/posts--";
loadData(URL, method)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
*/
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
