let d = new Date();

console.log(d);
d = d.toString();
console.log(d);
d = new Date(2024, 1, 13);
console.log(d.toString());

d = new Date('2024-01-13');
console.log(d.toString());

d = new Date('2024-01-13T12:00:00');
console.log(d.toString());


d = new Date('2024-01-13 12:00:00');
console.log(d.toString());

d = new Date('2024-01-13');
console.log(d.toString());

d = new Date('2024-01-13 12:30:00');
d= d.getTime();
console.log(d);
console.log(d.valueOf());

let x;
d = new Date();
x = d.toString();
console.log(x);
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getHours());

// API
x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);
x = Intl.DateTimeFormat('default').format(d);
console.log(x);