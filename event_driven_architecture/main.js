const fs = require("fs");
const os = require("os");
const path = require("path"); // Added for cross-platform compatibility
const EventEmitter = require("events"); // this cannot be stored as a variable; it is a class
const { log } = require("console");

// Node.js allows us to store it as a class and modify it
class Logger extends EventEmitter {
  // log is just a variable; it could've been anything
  log(message) {
    // The whole idea behind EventEmitter is that we're allowed to emit a message
    this.emit("message", { message }); // emit is an inbuilt method
    // That means I want to broadcast an event (that means) that event happened
  }
}

const logger = new Logger(); // A simple object of the class Logger
const logFilePath = path.join(__dirname, "eventlog.txt"); // This is the file where I'll dump down all the information

const logToFile = (event) => {
  // This method takes an event and crafts a log message based on the event
  const logMessage = `${new Date().toISOString()} - ${event.message}\n`;

  // We have the message; we can now access the file system and append it
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
};
// Till now, these are all just definitions, and nobody is actually listening or doing anything

// The whole job of listening to the event is by 'on'
// It is constantly listening for an event named "message"
// This guy listens when the code at line no.11 executes
logger.on("message", logToFile); // As soon as it listens to an event, it starts a function - EVENT-DRIVEN ARCHITECTURE
// Till now, the event is being listened to

// But no one is actually emitting the event
setInterval(() => {
  const memoryUsage = ((os.freemem() / os.totalmem()) * 100).toFixed(2); // Via 'os' we see the memory if it is shrinking
  logger.log(`Current memory usage: ${memoryUsage}%`);
}, 3000);

logger.log("Application Started");
logger.log("Application Event Occurred");
