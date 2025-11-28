//premetive Dtata types
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.77;
const isLoggedIn = false; // Boolean
const outsideTemp = null;
let userEmail; // undefined
const bigIntNumber = 121123353432442n;

console.log(typeof score);
console.log(isLoggedIn);

//Non-premetive Data types
//Object
//Array
//Function
const heros = ["shaktiman", "nagrajun", "spiderman"];
const myObj = {
  name: "Ravi",
  age: 22,
};
console.log(heros, myObj);

//null type of => object
//string type of => string
//function type of => obj-function define ;;*******
// Stack and Heap memory
// Stack memory => Primitive data types are stored in stack memory
// Heap memory => Non-premetive data types are stored in heap memory

//********** Stack memory example ********** */
let myCollegename = "Techno India Main Salt Lake";
let collegeName = myCollegename;
collegeName = "SRM University";
console.log(collegeName); // SRM University changeing the value of collegeName variable
console.log(myCollegename); // Techno India Main Salt Lake // myCollegename variable value is not changed
//********** Heap memory example ********** */

let userOne = {
  // store the reference of the object in stack memory
  name: "Ravi",
  age: 22,
  userEmail: "debjitdey559@gmail.com",
  upiId: "debjitdey@yabl",
};
console.log(userOne);
let userTwo = userOne;
userTwo.upiId = "debjitdey@oksbi"; // changing the value of upiId in userTwo
console.log(userTwo.upiId); // userTwo upiId is changed
console.log(userOne.upiId); // userOne upiId is also changed because both userOne and userTwo are pointing to the same object in heap memory
//********** Summary ********** */
// Primitive data types are stored in stack memory and non-primitive data types are stored in heap memory.
// When we assign a primitive data type to another variable, a copy of the value is created in stack memory.
// When we assign a non-primitive data type to another variable, a reference to the same object in heap memory is created in stack memory.
//Heap memory refrence copy; ******************************IMPORTANT*******************************//
