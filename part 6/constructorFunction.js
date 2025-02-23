function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Car(make, model) {
  this.make = make;
  this.model = model;
}
let mycar = new Car("Toyota", "Camry");
console.log(mycar);
let mynewcar = new Car("Tata", "Safari");
console.log(mynewcar);
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());
// function Animal(species) {
//   this.species = species;
// }
// Animal.prototype.sound = function () {
//   return `the ${this.species} makes a sound`;
// };
// let dog = new Animal("dog");
// console.log(dog.sound());
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
