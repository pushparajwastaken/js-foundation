const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 88, 9, 7, , 53, 2332];
const newnums = mynums.filter((num) => num > 4);
console.log(newnums);
mynums.forEach((element) => {
  if (element > 4) {
    console.log(element);
  }
});

//map and chaining
const mynumers = [1, 2, 3, 4, 5, 6, 8, 88, 7];
const newnumers = mynumers
  .map((num) => num * 10) //first 10 will be multiplied with each element
  .map((num) => num + 1) //then 1 will be added to each element
  .filter((num) => num > 50);
console.log(newnumers);

//reduce -includes accumulator and current value
const numeruno = newnumers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  400
);
console.log(numeruno);
