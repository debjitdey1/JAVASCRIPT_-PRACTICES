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
// console.log(myObj);
// // console.log(typeof myObj);
// console.log(myObj.Email); // that is not a good practice to write key name starting with capital letter
// console.log(myObj["phoneNo"]);
// console.log(myObj["adress"]);
// console.log(myObj[symp1]);
// console.log(typeof myObj[symp1]);
// adding new key-value pair to object
const description = {};
// description.ipAddress = 323453332;
// description["macAddress"] = "00:1B:44:11:3A:B7";
// console.log(description["macAddress"]);

const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "a", 4: "b" };
const object3 = { 5: "a", 6: "b" };
// const mergedObject = Object.assign({}, object1, object2, object3);
const mergedObject = { ...object1, ...object2, ...object3 };
// console.log(mergedObject);

let obb = [
  { name: "Debjit", age: 24, hobbies: "coding" },
  { name: "Ankit", age: 25, hobbies: "reading" },
  { name: "Raju", age: 23, hobbies: "gaming" },
];
// console.log(obb);
// console.log(object.keys(obb));

console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));
