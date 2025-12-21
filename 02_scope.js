let a = 222;
if (true) {
  let a = 18;
  const b = 45;
  var c = 758;
  //   console.log(`inside block a : ${a}`);
}
console.log(a);

function one() {
  const username = "Yamini",
    password = "12345";
  function two() {
    const website = "youtube";
    console.log(username);
    console.log(website);
  }
  two();
}
one();

//hoasting
function addone(num1) {
  return num1 + 1;
}
console.log(addone(5));

const numberDeclare = function (num1) {
  return function (num2) {
    return num1 + 1;
  };
};
numberDeclare(5);
// console.log((5));
