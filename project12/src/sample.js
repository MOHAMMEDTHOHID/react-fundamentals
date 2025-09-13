const num = [1, 2, 3];
console.log(num);

const [first, ...restnumbers] = [1, 2, 3, 4, 5];
console.log(first);
console.log(restnumbers);

const obj = {
  name: "thohid",
  age: 22,
  city: "hyd"
};
console.log(obj);

const key = "email";
const email = "thohid@gmail.com";
const person = {
  ...obj,
  [key]: email
};
console.log(person);