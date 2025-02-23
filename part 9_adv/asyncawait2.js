function fetchpostdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}
function fetchcommentdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment data fetched");
    }, 3000);
  });
}
async function getblogdata() {
  try {
    console.log("Fetching blog data");
    // const blogdata = await fetchpostdata();
    // const commentdata = await fetchcommentdata();

    const [commentdata, postdata] = await Promise.all([
      fetchcommentdata(),
      fetchpostdata(),
    ]);
    console.log("fetch complete");
    console.log(postdata);
    console.log(commentdata);
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}
getblogdata();
