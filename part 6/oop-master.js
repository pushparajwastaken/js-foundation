let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John", 20);
// console.log(john.name);
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
Array.prototype.hitesh = function name() {
  return `custom method ${this}`;
};
let myarr = [1, 2, 3];
// console.log(myarr.hitesh());
let mynewarr = [1, 2, 3, 4, 5, 6];
// console.log(mynewarr.hitesh());

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return `${this.make} car made in ${this.year} of model ${this.model}`;
  }
}
class Car extends Vehicle {
  drive() {
    return `${this.make}:This is an inheritance example`;
  }
}
let mycar = new Car("Tata", "Corolla", 2023);
// console.log(mycar.start());
// console.log(mycar.drive());

//ENCAPSULATION-Restricting direct access to data objectds outside the class

class Bankaccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getbalance() {
    return `$ ${this.#balance}`;
  }
}
let account = new Bankaccount();
// console.log(account.getbalance());

//ABSTRACTION-
class Coffemachine {
  start() {
    //call Db
    //filter value
    return `Starting the machine....`;
  }
  brewCoffee() {
    //complex calculation
    return `Brewing coffee`;
  }
  pressstartbutton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} , ${msg2}`;
  }
}
let mymachine = new Coffemachine();
// console.log(mymachine.start());
// console.log(mymachine.brewCoffee());
// console.log(mymachine.pressstartbutton());

//POLYMORPHISM
class Bird {
  fly() {
    return `flying......`;
  }
}
class Penguin extends Bird {
  fly() {
    return `Penguin can't fly`;
  }
}
let bird = new Bird();
let penguin = new Penguin();

//STATIC METHODS-When you don't want anyone to use the method in their instances/object, you can make it static
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// console.log(Calculator.add(234, 2453)); but we can access them directly by calling the class instead of creating a object

//GETTERS AND SETTERS

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see this salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("INVALID SALARY");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", 50000);
console.log(emp._salary);
