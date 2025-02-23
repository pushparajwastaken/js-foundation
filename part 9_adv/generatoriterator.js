//generator function doesn't resolve everything at once it resolves one value at a time
function* numbergenerator() {
  yield 1;
  yield 2;
  yield 3;
}
let gen = numbergenerator();
let gen2 = numbergenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
