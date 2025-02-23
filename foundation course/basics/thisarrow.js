//arrow function-iske andar 'this' nhi hota hai
//this-tells us about current context
const user = {
  username: "pushpa",
  price: 999,
  //a method which is a function
  welcomemessage: function () {
    //iss user scope ke andar jitne bhi variable hai unko access karne ke liye this ka use karenge
    console.log(`${this.username},welcome to website`);
    console.log(this);
  },
};
user.welcomemessage();
user.username = "sam"; //yaha par humne context change kar diye aur this function ki madad se access kar liya
//context mtlb wo variable kya value rakh rhe hai
user.welcomemessage();

// console.log(this);
// function chai() {
//   let username = "pushpa";
//   console.log(this.username);//this function sirf object ke andar kaam karta hai kisi function ke andar nahi
// }
// chai();

//ARROW FUNCTION
() => {};

const chai = () => {
  let username = "pushpa";
  console.log(this.username); //arrow function ke andar bhi this function kaam nhi kara
};
chai();
//implicit return

//  ()=>
//no need of curly brackets and return keyword
