//global scope
let a = 10;
const b = 20;
var c = 30;
{
  //local scope
} //scope of that program

console.log(a);
console.log(b);
console.log(c);

//scope in browser is different from scope in node.js

function one() {
  const username = "pushparaj";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  //
  two();
}
one();

const add2 = function (num) {
  return num + 1;
};
