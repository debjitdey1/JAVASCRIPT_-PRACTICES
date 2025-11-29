const number = 33;
// console.log(number);
// console.log(typeof number); //       it will print the type of the number

const balance = new Number(2343);
// console.log(typeof balance); //  it will print the type of the number object
// console.log(balance.toFixed(2)); // it will convert the number to string with 2 decimal points
// console.log(balance.toString().length); // it will convert the number to string and then print the length of the string

const otherNumber = 122.94566;
// console.log(otherNumber);
// console.log(otherNumber.toPrecision(3)); // it will convert the number to string with 4 significant digits

const ammount = 1000000000;
// console.log(ammount);
// console.log(ammount.toLocaleString("en-IN")); // it will convert the number to string with commas as per Indian locale

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.min(4, 67, 2, -9, 34));
console.log(Math.max(4, 6, 2, 45, 3, 66));
console.log(Math.sqrt(64)); // it will return the square root of the number
console.log(Math.ceil(5.3));
console.log(Math.floor(4.7));
console.log(Math.random());
console.log(Math.random() * 10 + 1);
