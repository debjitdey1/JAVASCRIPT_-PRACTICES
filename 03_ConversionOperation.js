let score = NaN;
// console.log(typeof score); // number
// console.log(score); // 99
let valueNumber = Number(score);
// console.log(typeof valueNumber); // always number has been converted
// console.log(valueNumber); // 99 // NaN

//33 => "33"
//33aaa => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN
//" " => 0
//"33.33" => 33.33
//"33,33" => NaN
let isLoggedIn = 1;
let booleanValue = Boolean(isLoggedIn);
// console.log(booleanValue);
// its they are conversion to boolean
//1 => true
//0 => false
//"hello" => true
//"" => false
//null => false
//undefined => false
//NaN => false

//******************* Operations ******************** */

let value = 44;
let negativeValue = -value;
console.log(negativeValue); // -44
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(5 % 2); // remainder 1
console.log(5 ** 2); // 5^2 = 25
console.log(2 + "2"); // "22" string concatenation
