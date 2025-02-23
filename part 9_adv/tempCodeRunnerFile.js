const Person = {
  name: "John",
  greet() {
    console.log(`Hi I am ${this.name}`);
  },
};
Person.greet();
