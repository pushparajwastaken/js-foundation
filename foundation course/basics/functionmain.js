function saymyname() {
  //code
}
saymyname; //reference
saymyname(); //execution

function add(num1, num2) {
  console.log(num1 + num2);
}
const result = add(5, 6);
console.log(result); //the result will be undefined becuase the function doesn't return anything

function calculateprice(...num1) {
  //this will help us take multiple inputs and then it'll put them in parameter
  return num1;
}
const user = {
  username: "Pushparaj",
  price: 199,
};
console.log(calculateprice(200, 400, 500));

function handeleobject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handeleobject(user);
