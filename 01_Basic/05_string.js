const name = "Debjit";
const repoCount = 93;

console.log(name + repoCount + "Values"); // that is not good way to concatenate in Javascript
console.log(
  `My name is ${name} and My reposetory Count ${repoCount} in GitHub`
); // this is the good way to concatenate in Javascript using template literals

const gamename = new String("Pubg Mobile");
console.log(gamename);
console.log(gamename[6]);
console.log(gamename.__proto__); // it will show all the methods available for string
console.log(gamename.length); // it will show the length of the string
console.log(gamename.toUpperCase()); // it will convert the string to uppercase
console.log(gamename.toLowerCase()); // it will convert the string to lowercase
console.log(gamename.includes("Mobile")); // it will check if the string includes the given substring
console.log(gamename.startsWith("Pubg")); // it will check if the string starts with the given substring
console.log(gamename.endsWith("Mobile")); // it will check if the string ends with the given substring
console.log(gamename.indexOf("M")); // it will return the index of the first occurrence of the given substring
console.log(gamename.lastIndexOf("e")); // it will return the index of the last occurrence of the given substring
console.log(gamename.slice(0, 4)); // it will return the substring from index 0 to 4
console.log(gamename.replace("Mobile", "PC")); // it will replace the given
console.log(gamename.charAt(3)); // it will return the character at the given index
