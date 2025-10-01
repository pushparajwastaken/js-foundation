fetch("https://dummyjson.com/products/", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({}),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
