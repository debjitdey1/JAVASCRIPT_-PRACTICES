// const myarr = [13, 6, 13, 66, 88];
// console.log(myarr);
// // console.log(typeof myarr); // object
// const arr2 = new Array(12, 45, 78, 90);
// console.log(arr2);

// // Array Methods
// arr2.push(12222);
// console.log(arr2);

// arr2.pop();
// console.log(arr2);

// arr2.shift();
// console.log(arr2);

// arr2.unshift(5555);
// console.log(arr2);

// console.log(arr2.length);

// console.log(arr2.sort());

// console.log(arr2.includes(944));
// console.log(arr2.indexOf(78));

//slice vs splice
// let newConcept = [22, 44, 55, 66, 77, 88, 99];
// // console.log(newConcept.slice(2, 5));
// console.log(newConcept.splice(2, 5));
// console.log(newConcept);

let avengers = ["thor", "ironman", "spiderman", "hulk", "captain america"];
let superheroes = ["superman", "batman", "flash", "wonderwoman"];
// console.log(avengers, superheroes);
// let combined = avengers.concat(superheroes);
// console.log(combined);
let a2 = avengers.push(...superheroes);
// console.log(a2);
let combined = [...avengers, ...superheroes];
// console.log(combined);

let aray11 = [
  1,
  3,
  2,
  4,
  [2, 3, 6, 7],
  55,
  22,
  6,
  [45, 7, 3, (6)[(5, 22, 26, 7)]],
];
const real_another_array = aray11.flat(infinity);
console.log(real_another_array);
