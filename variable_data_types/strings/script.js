let x;

const name = "jose";
const age = 50;

x = 'Hai i am ' + name + 'and my age is ' + age + '.';
console.log(x);


// Template literals
x = `Hello i am ${name} and my age is ${age}.`;
console.log(x);
console.log(x[0]);
console.log(x[1]);

// String properties and methods
const m = 'Hello World';
x = m.length;
console.log(x);

const v = new String('Hello World');
console.log(v, typeof v);

let nameLetter = 'fooBar';
console.log(nameLetter.toLocaleLowerCase());
console.log(nameLetter.toUpperCase());
console.log(nameLetter.charAt());
console.log(nameLetter.charAt(1));
console.log(nameLetter.indexOf('f'));
console.log(nameLetter.indexOf('o'));
console.log(nameLetter.substring(0, 3));
console.log(nameLetter.substring(3));
console.log(nameLetter.substring(0, 3));
console.log(nameLetter.slice(1));

let test = "            Hello World";
console.log(test.trim());
console.log(test.replace('World', 'Jose'));
console.log(test.includes('Hello'));
console.log(test.valueOf());
console.log(test.split());
console.log(test.trim().split(' '));
console.log(test.trim().split(''));

