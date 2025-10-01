import "dotenv/config";
import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

const app = express();
const port = 8000;

app.use(express.json());

let teadata = [];
let nextid = 1;
app.use(
  morgan(morganFormat, {
    stream: {
      //stream is all the data that is going through,we are jsut grabbing that and overwriting information
      //just as we want to
      write: (message) => {
        //the log objects gives us a whole lot of information
        //so we chopped up some of the information we reallly want
        //write is a simple method,the message consists of everything

        const logObject = {
          method: message.split(" ")[0], //we want method like get put post
          url: message.split(" ")[1], //chopping of the end points like /teas
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);
//add a new tea
app.post("/teas", (req, res) => {
  //console.log("POST"); //this will tell us whenever that particular route was hit

  const { name, price } = req.body; //extracting data from the request
  //once i have this we will create object so we can add it to the array

  const newTea = {
    id: nextid++,
    name,
    price,
  };
  teadata.push(newTea);
  res.status(201).send(newTea);
});
//route to get all tea
app.get("/teas", (req, res) => {
  res.status(200).send(teadata);
});
//get a tea with id
app.get("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Chai nhi mili");
  }
  res.status(200).send(tea);
});
//update tea
app.put("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("chai nhi mili");
  } else {
    const { name, price } = req.body;
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea);
  }
});

//delete tea
app.delete("/teas/:id", (req, res) => {
  const index = teadata.findIndex((t) => t.id === parseInt(req.params.id));
  if (index == -1) {
    return res.status(404).send("chai nhi mili");
  }
  teadata.splice(index, 1); //from that index delete only 1 so that only one is gone
  return res.status(200).send("deleted");
});
app.listen(port, () => {
  console.log(`Server is running at Port ${port}...`);
});
/*NOTE-
BACKEND-if you ain't measuring it ,you can't measure it
if you ain't testing it,you can't trust it
if you ain't documenting it,you can't maintain it

*/
