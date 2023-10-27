a = 'hello';
b = 'Ivan';
a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
b = b.charAt(0).toLowerCase() + b.slice(1).toLowerCase();
console.log(a + ' ' + b);

a = 'lorem ipsum dolor';
b = a.length;
console.log(b);

a = 'lorem ipsum dolor sit amet'
let words = a.split(' ')
let reversedWords = [words[3], ...words.slice(0, 3), words[4]]
let result = reversedWords.join(' ')
console.log(result)

a = 'children'
b = a.slice(0, -1).toUpperCase() + a.slice(-1).toLowerCase();
console.log(b)

a = 'boss'
b = a[0] + a[2] + a[3] + a[1]
console.log(b);

a = 'sunday'
b = a.indexOf('d')
console.log(b)

a = 'hello'
c = 'ks'
c = a.substring(0, 2) + c + a.substring(4)
console.log(c)

a = 'user'
b = 'new'
c = b + ' ' + a.substring(0, 2)
console.log(c)

a = 'monday'
b = 'day'
c = b + a.slice(3) +  a.slice(0, 4)
console.log(c)

a = 'HELLO'
b = a.toLowerCase()
b = b.substr(0, 1) + a[1].toUpperCase() + b.substr(2, 1) + a[3].toUpperCase() + b.substr(4);
console.log(b)

a = 5
b = '400'
c = a * 10 + parseInt(b)
console.log(c)

a = 'monkey'
b = 'banana'
c = a[0] + b[1] + a[2] + b[3] + a[3]
console.log(c)