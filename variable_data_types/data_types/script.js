// premitive data types
// string
// Number (Integer and floating points)
// Boolean
// Null
// Undefined
// Symbol
// BigInt (New data type)


//Reference
// non-primitive
// object litreals
// arrays
// functions

// js is  a dynamically typed language
// ts allow the static typing


const firstName = "saul";
const age = 30;
const deci = 0.9;
const hasCar = false;
const aptNo = null;
let score;
score = undefined;
const id = Symbol('id');
const n = 93876987988696969898n;
const person = {
    "name": "meme",
    "age": 20
}
function sayHello() {
    console.log('hey there');
}
const func =sayHello;

console.log(firstName, typeof firstName);
console.log(age, typeof age);
console.log(deci, typeof deci);
console.log(aptNo, typeof aptNo);
console.log(score, typeof score);
console.log(id, typeof id);
console.log(n, typeof n);
console.log(person, typeof person);
console.log(func, typeof func);
