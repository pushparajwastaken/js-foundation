import "dotenv/config";
import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

// Morgan log format
const morganFormat = ":method :url :status :response-time ms";

const app = express();
const port = 8000;

app.use(express.json());

let teadata = [];
let nextid = 1;

// Morgan logging middleware
app.use(
  morgan(morganFormat, {
    stream: {
      // Stream is all the data going through; we grab and overwrite it as we want
      write: (message) => {
        // The log object gives us a lot of information, but we extract only what we need
        const parts = message.trim().split(/\s+/); // More reliable split
        if (parts.length >= 4) {
          const logObject = {
            method: parts[0], // Request method (GET, POST, PUT, DELETE)
            url: parts[1], // Endpoint (e.g., /teas)
            status: parts[2], // HTTP status code
            responseTime: parts[3], // Response time in ms
          };
          logger.info(JSON.stringify(logObject));
        }
      },
    },
  })
);

// Add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;

  // Validate request body
  if (!name || price === undefined) {
    return res.status(400).send({ error: "Name and price are required." });
  }

  const newTea = {
    id: nextid++,
    name,
    price,
  };

  teadata.push(newTea);
  res.status(201).json(newTea);
});

// Get all teas
app.get("/teas", (req, res) => {
  res.status(200).json(teadata);
});

// Get a tea by ID
app.get("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).send({ error: "Chai nhi mili" });
  }

  res.status(200).json(tea);
});

// Update tea
app.put("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).send({ error: "Chai nhi mili" });
  }

  const { name, price } = req.body;

  if (name !== undefined) tea.name = name;
  if (price !== undefined) tea.price = price;

  res.status(200).json(tea);
});

// Delete tea
app.delete("/teas/:id", (req, res) => {
  const index = teadata.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send({ error: "Chai nhi mili" });
  }

  teadata.splice(index, 1); // Remove only the targeted tea
  res.status(200).send({ message: "Tea deleted successfully." });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at Port ${port}...`);
});

/* 
NOTE:
BACKEND PRINCIPLES:
- If you ain't measuring it, you can't improve it.
- If you ain't testing it, you can't trust it.
- If you ain't documenting it, you can't maintain it.
*/

