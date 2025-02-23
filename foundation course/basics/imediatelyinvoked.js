//immediately invoked function expression (IIFE)
//we use iife to protect our function from the pollution done by the global scope

//this is an example of a named iffe
(function chai() {
  console.log(`DB CONNECTED`);
})();
//the first parenthesis is declaration of function and the second is calling that function
((name) => {
  console.log(`DB CONNECTED ${name}`);
})(2);
