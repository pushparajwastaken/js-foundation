const mysym = Symbol("key1");
const user = {
  name: "John",
  age: 18,
  location: "Jaipur",
  [mysym]: "mykey1",
  email: "psinghparmar@gmail.com",
  isloggedin: false,
  lastlogindays: ["Monday", "Saturday"],
};
//in js functions are treated as variables
user.greeting = function () {
  console.log("Hello User");
};
user.greeting2 = function () {
  console.log(`Hello User, ${this.name}`); //string interpulation
};
console.log(user.greeting2());
