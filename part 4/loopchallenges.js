// let sum = 0;
// let i = 0;
// while (i <= 5) {
//   sum += i;
//   i++;
// }
// console.log(sum);
// let countdown = [];
// let i = 5;
// while (i > 0) {
//   countdown.push(i);
//   i--;
// }
// console.log(countdown);
// let num = 3;
// let sum = 0;
// do {
//   sum += num;
//   num--;
// } while (num > 0);
// console.log(sum);
// let multipliednumbers = [];
// let array = [2, 4, 6];
// for (let i = 0; i < array.length; i++) {
//   multipliednumbers.push(array[i] * 2);
// }

// console.log(multipliednumbers);
// let array = ["Paris", "New York", "London"];
// let citylist = [];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//   citylist.push(array[i]);
// }
// console.log(citylist);
// let array = [
//   "green tea",
//   "black tea",
//   "oolong tea",
//   "lemon tea",
//   "chai",
//   "cutting chai",
// ];
// let selectedtea = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == "chai") {
//     break;
//   }
//   selectedtea.push(array[i]);
// }
// console.log(selectedtea);
// let array = ["London", "New York", "Paris", "Berlin"];
// let visitedcities = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === "Paris") {
//     continue;
//   }
//   visitedcities.push(array[i]);
// }
// console.log(visitedcities);
// let numbers = [1, 2, 3, 4, 5, 6];
// let smallnumbers = [];
// for (const num of numbers) {
//   if (num === 4) {
//     break;
//   }
//   smallnumbers.push(num);
// }
// console.log(smallnumbers);
// let chai = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredteas = [];
// for (const tea of chai) {
//   if (tea === "herbal tea") {
//     continue;
//   }
//   preferredteas.push(tea);
// }
// console.log(preferredteas);
// let citiespopulation = {
//   London: 8900000,
//   "New York": 8537673,
//   Paris: 2148271,
//   Berlin: 350000,
// };
// let citiesnewpoplulation = {};
// //console.log(Object.keys(citiespopulation));
// for (const cities in citiespopulation) {
//   //console.log(citiespopulation[cities]);
//   if (cities === "Berlin") {
//     break;
//   }
//   //key=value
//   citiesnewpoplulation[cities] = citiespopulation[cities];
// }
// console.log(citiesnewpoplulation);
// let array = [
//   "green tea",
//   "black tea",
//   "oolong tea",
//   "lemon tea",
//   "chai",
//   "cutting chai",
// ];
// let availableteas = [];
// array.forEach((tea) => {
//   if (tea === "chai") {
//     return;
//   }
//   availableteas.push(tea);
// });
// console.log(availableteas);
// cities = ["London", "New York", "Paris", "Sydney", "Berlin"];
// traveledcities = [];
// cities.forEach((city) => {
//   if (city === "Sydney") {
//     return;
//   }
//   traveledcities.push(city);
// });
// console.log(traveledcities);
// let array = [2, 5, 7, 9];
// let doublednumbers = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 7) {
//     continue;
//   }
//   doublednumbers.push(array[i] * 2);
// }
// console.log(doublednumbers);
let teas = [
  "green tea",
  "black tea",
  "oolong tea",
  "lemon tea",
  "chai",
  "cutting chai",
];
let shortteas = [];
teas.forEach((tea) => {
  if (tea.length > 10) {
    return;
  }
  shortteas.push(tea);
});
console.log(shortteas);
