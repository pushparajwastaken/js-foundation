function fetchuserdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "chai", url: "https://chaicode.com" });
    }, 3000);
  });
}
async function getuserdata() {
  try {
    console.log("fetching user data......");
    const userdata = await fetchuserdata();
    console.log(userdata);
    console.log("User data fetched successfully");
  } catch (error) {
    console.log("Error fetching Data", error);
  }
}
getuserdata();
