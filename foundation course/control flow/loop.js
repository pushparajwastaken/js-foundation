//array specific loop
const object = [1, 2, 3, 4, 5, 6];
for (const element of object) {
  console.log(element);
}

//MAPS

const map = new Map();
map.set("IN", "India");
map.set("USA", "America");
map.set("UK", "United Kingdom");
console.log(map);

const myobject = {
  game1: "nfs",
  game2: "temple run",
};

//for in loop for iterating through an object
for (const key in myobject) {
  console.log(`${key} is ${myobject[key]}`);
}

//for each loop

const coding = ["js", "ruby", "python", "java", "cpp"];
// coding.forEach((element) => {
//   console.log(element);
// });
// coding.forEach(function (key) {
//   console.log(key);
// });
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
