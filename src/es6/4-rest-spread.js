// arrays destructuring
let fruits = ['Apple', 'Orange', 'Pineapple'];
let [a, b, c] = fruits;
console.log(a, b, c);

// Object destructuring
let user = { username: "Jairo", age: 33 };
let { username, age } = user;
console.log(username, age);

// Spread operator
let person = { name: "Jairo", age: 33 };
let country = "CO";

let data = { ...person, country };
console.log(data);

// Rest params
function sum(num, ...values){
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 2, 3, 5);