//The question is that i have print the original properties of the array
//this means there are some properties added to the array and we have to ignore them
Array.prototype.extraProperty = "pushpaaa";
const myArray = [1, 2, 3, 4];
// for (let v in myArray) {
//   console.log(v);
// }
// 0
// 1
// 2
// 3
// extraProperty
for (let v in myArray) {
  if (myArray.hasOwnProperty(v)) {
    console.log(v);
  }
}
