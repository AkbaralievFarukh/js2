let a
let b

a = 'hello';
b = 'Ivan';
a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
b = b.charAt(0).toLowerCase() + b.slice(1).toLowerCase();
console.log(a + ' ' + b);

a = 'lorem ipsum dolor';
b = a.length;
console.log(b);

