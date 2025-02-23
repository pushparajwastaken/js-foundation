// const tinderuser = new Object(); //this is a singleton object
const tinderuser = {}; //this is a non-singelton object
tinderuser.id = "123abc";
tinderuser.name = "Samm";
tinderuser.isloggedin = false;
// console.log(tinder);

const regularuser = {
  email: "psinghparmar@gmail.com",
  fullname: {
    //object inside a object
    userfullname: {
      //object inside a object inside a object
      firstname: "pushpaaaaaa",
      lastname: "rajjjjjj",
    },
  },
};
// console.log(regularuser);

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);

console.log(regularuser.fullname.userfullname.lastname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

const course = {
  coursename: "js in hindi",
  price: "999",
  courseinstructor: "pushparaj",
};
const { courseinstructor: instructor } = course;
console.log(instructor);
