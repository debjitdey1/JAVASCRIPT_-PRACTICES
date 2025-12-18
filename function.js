// function myName() {
//   console.log("D");
//   console.log("E");
//   console.log("B");
//   console.log("J");
//   console.log("I");
//   console.log("T");
// }
// myName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const reult = addTwoNumbers(33, 66);
// console.log("result:", reult);

// function LogginUser(usename) {
//   return `${usename}is  a logged in user`;
// }
function LogginUser(usename) {
  if (!usename) {
    //advanced condition
    return "please provide a username";
  }
  return `${usename}is  a logged in user`;
}
console.log(LogginUser());
