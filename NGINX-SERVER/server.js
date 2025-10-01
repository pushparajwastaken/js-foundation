//we require libraries to be able to switch between projects

const http = require("http"); //it is a module in itself which has a lot of functionality
const fs = require("fs"); //helps us understand and work through the file function of the operation system
//also fs is to handle the files and not to grab the files
const path = require("path"); //to grab the file and path
const { stringify } = require("querystring");

const port = 3000; //on every computer we have a lot of port
//we can use any free one the most common one is 8080,8000,3000
//8443 is used by the https
//22 is reserved ffor making nhs request

//CREATING A SERVER
const server = http.createServer((req, resp) => {
  //req is the request and resp is the response
  // we actually want to do this req.url==="/"=>'index.html'
  const filepath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  ); //this has the property to reference the current directory wherever we are
  //this dirname will give us accessto the current directory
  //the whole idea of path is we have to give an absolute path of wherever the files are located
  const extname = String(path.extname(filepath)).toLowerCase(); //sometimes people write html in upper case
  //so we are converting it to lower case so that it can be easily accessed

  //i can allow what type of file i am supporting
  const mimetypes = {
    ".html": "text/html",
    ".css": "text/html",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  //checking if extname is present in mimetypes
  const contenttype = mimetypes[extname] || "application/octet-stream"; //this application/octet-stream is a binary file
  //typically it will be an opplication or a document that must be opened in an application
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        resp.writeHead(
          404,
          { "content-type": contenttype },
          resp.end("404:File not found,brooooooooo")
        );
      }
    } else {
      resp.writeHead(200, { "content-type": contenttype });
      resp.end(content, "utf-8");
    }
  });
}); //this always listens on the port for the upcoming traffic
//we haven't mentioned on which port we are listening or what we are listening

//server is just an object of create server
//once the object is created we have to add some functionality to it

//on what port should i listen and what should i listen and callback
server.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});

//random notes-Javscript is not really capable of listening to http event
//this whole functionality is dependent on libuv
//LIBUV is actually responsible for binding all that request and giving us an object of
//respect and we can do whatever with that

//whenever we a request or a response comes up it is divided into two parts
//response head and response body
//the whole idea of head is to have meta data content like statuscode,what type of data code are we containing
//the body actually gooes ahead sends us the content of the data whether it is html or image or whatever
