const username = {
  "first name": "Pushparaj",
  isloggedin: true,
};
username.firstname = "Mr. P";
username.lastname = "Singh";
console.log(username);
console.log(username["first name"]);
console.log(username.lastname);
console.log(typeof username);
let today = new Date();
console.log(today.getDate());

//Array

let heros = ["a", "b", "c", true];
const myarr = [1, 2, 3, 4, 5, 6, 7, 8]; //resizable arrays
//arrays ki copy banne pe wo same reference point pe point karte hai
/*slice main array pe koi change nhi aata plus upper limit nhi lete hai
aur splice main upper limit bhi lete hai plus array ke andar se wo saare elemenets hatt jate hai */
//concat is a good way to join two arrays but it will result a new array
// or you can use[...array1,...array2]to join two arrays(3 dots)
console.log(heros[0]);
console.log(1 + "1");
console.log("1" + 1);
let isvalue = true;
console.log(typeof Number(isvalue));
console.log(Number(undefined));
console.log(Number(null));
console.log(Array.from({ name: "pushparaj" })); //interesting
