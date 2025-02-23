// Number
let balance = 120;
let aotherbalancde = new Number(120);
// console.log(balance);
// console.log(aotherbalancde.valueOf());
console.log(typeof balance); // Output: "number"
console.log(typeof aotherbalancde); // Output: "object"

//boolean
let isactive = true;
let isreallyactive = new Boolean(true); //not recommended

//null and undefined

let firstname; //undefined
console.log(firstname);
let secondname = null;
console.log(secondname);

//string

let mystring = "hello";
let mystringone = "hola";
let username = "hitesh";
let oldgreet = mystring + " " + "hitesh";
console.log(oldgreet);
let greetmessage = `Hello ${username}!`;
console.log(greetmessage);
let demoone = `Value is ${2 * 2}`;
console.log(demoone);

//symbol

let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");
console.log(sm1 == sm2);
let max = 50;
let min = 70;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
let mydate = new Date();
console.log(mydate.toDateString()); //months start from zero in javascript when declaredd by a single variable
