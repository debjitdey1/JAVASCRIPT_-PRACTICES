const userEmail = "debjeetdey669@gmail.com";
if (userEmail) {
  //   console.log(`Print my Email ${userEmail}`);
  // } else {
  //   console.log("No Email Found");
}

//falsy Value = 0, "", null, undefined, NaN, -0, BigInt(0n), false
//truthy Value = 1, "0", [], {}, true, BigInt(1n), "flase", "null", "undefined"
if (userEmail.length === 0) {
  console.log("Array IS EMPTY");
}

//nulish coalescing operator (??) : Null, undefined
let val1;
// val1 = 5 ?? 10;
// val1 = undefined ?? 22;
val1 = null ?? 3 ?? 33;
console.log(val1); // Output: 44

const iceprist = 100;
iceprist <= 80 ? console.log("lessthan 80") : console.log("greater than 80");
