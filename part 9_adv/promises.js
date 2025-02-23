function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error");
      }
    }, 3000);
  });
}

fetchdata()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error)); //error is just a name we can even write it as data there's nothing stopping us from doing that
