let x;

x = 5 + '5';
console.log(x, typeof x);

x = 5 + Number('5');
console.log(x, typeof x);

x = 5 * '5';
console.log(x, typeof x);

x = 5 + null;
console.log(x, typeof x);

x = 5 + true;
console.log(x, typeof x);

x = 5 + false;
console.log(x, typeof x);