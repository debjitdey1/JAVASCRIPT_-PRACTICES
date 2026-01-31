// const user = {
//   username: "Debjit Dey",
//   password: "Abcd",
//   welcomemesage: function () {
//     console.log(`${this.username} ,Welcome to the JavaScript World`); //Objects Are Support is This keyword
//     console.log(this); //Logs the user object
//   },
// };
// user.welcomemesage();
// user.username = "Rahul";
// user.welcomemesage();
// console.log(this); // Empty Object {}

// //Browser Ar modhe Jegulo thake Oigulo global Object Thake "Window Object"

// const chai = function test() {
//   let username = "hitesh";
//   console.log(this.username);
// };
// chai();
// //Function are not support "This"Value

// //Arrow Function
// const chai2 = () => {
//   let username = "hitesh";
//   console.log(this.username);
// };
// chai2();

// Explicit return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(5, 10));

//Implicit Return (there are The Same Line Concept )
const addTwo11 = (num1, num2) => num1 + num2;
console.log(addTwo(5, 10));
