const Person = {
  name: "John",
  greet() {
    console.log(`Hi I am ${this.name}`);
  },
};
Person.greet();
const greetfunction = Person.greet;
greetfunction(); //Hi I am undefined
const boundgreet = Person.greet.bind({ name: "Rahul" });
boundgreet(); //Hi I am Rahul
//bind,call and apply
