const person = {
  name: "shuvo",
  age: "24",
  character: "optimistic"
};
const newperson = person;
person.name = "shuvo chakma";

console.log(newperson);
let numbers = [2, 4];
let p = numbers.map(numbers => {
  return numbers * 2;
});
console.log(p);
