// Dates

let newdate = new Date();
console.log(newdate);
console.log(newdate.toString());
console.log(newdate.toDateString());
console.log(newdate.toISOString());
console.log(newdate.toUTCString());

let mycurrentDate = new Date(2025, 10, 29); // year, month ( STARTING IS 0 ), date
console.log(mycurrentDate.toDateString());

let mydateStanmp = Date.now();
console.log(mydateStanmp);
// console.log(mydateStanmp.getTime()); // timestamp in milliseconds since epoch
console.log(Math.floor(mydateStanmp / 1000)); // days since epoch
