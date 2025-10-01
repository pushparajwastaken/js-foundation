//Winston helps you keep your logs neat and organized.
//Morgan watches what’s happening and writes down all the important stuff about visitors to your app.
import { createLogger, format, transports } from "winston"; //createlogger is to create a customised logger
//we are customising format ,how we want to see the data
//we can cosider transports like transport system  which helps us move our data from one point to another

const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
});

export default logger;
