//singleton object-when you make a object from a constructor
//Object.create-this is the constructor method

//object literals-a way of declaring objects
const mysym = Symbol("key1");
const user = {
  name: "John",
  age: 18,
  location: "Jaipur",
  [mysym]: "mykey1", //this will printout [Symbol(key1)]: 'mykey1'
  //thus referring to the symbol
  email: "psinghparmar@gmail.com",
  isloggedin: false,
  lastlogindays: ["Monday", "Saturday"],
}; //this is an object

//accessing objects
console.log(user["email"]);

user.email = "chatgpt@gmail.com";
console.log(user.email);
Object.freeze(user); //this will make the object immutable
user.email = "psinghparmar@gmail.com"; //this will not change email because of the earlier step
console.log(user);
