console.log("random dogs");
const dogUrl = "https://dog.ceo/api/breeds/image/random";
var image = document.querySelector("#dog_image");

fetch(dogUrl, { method: "GET" })
  .then((d) => d.json())
  .then((value) => {
    image.src = value.message;
  })
  .catch((error) => console.log(error));

console.log(image);
