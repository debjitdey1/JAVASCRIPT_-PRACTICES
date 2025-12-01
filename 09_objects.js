const symp1 = Symbol("key1");
let myObj = {
  name: "Debjit",
  age: 24,
  hobbies: ["coding", "reading", "gaming"],
  Email: "debjitdey559@gmail.com",
  [symp1]: "mySympValue",
  adress: `Contai,
  PurbaMdinipur,
  WestBengal,
  India`,
  phoneNo: 8617841049,
};
console.log(myObj);
// console.log(typeof myObj);
console.log(myObj.Email); // that is not a good practice to write key name starting with capital letter
console.log(myObj["phoneNo"]);
console.log(myObj["adress"]);
console.log(myObj[symp1]);
console.log(typeof myObj[symp1]);
// adding new key-value pair to object
