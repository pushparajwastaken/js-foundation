let computer = { cpu: 12 };
let lenovo = { screen: "O-LED", __proto__: computer };
let tomhardware = {};
console.log(`lenovo`, lenovo.__proto__);
let genericcar = { tyres: 4 };
let tesla = {
  driver: "AI",
};
Object.setPrototypeOf(tesla, genericcar);

console.log(`tesla`, Object.getPrototypeOf(tyres));
