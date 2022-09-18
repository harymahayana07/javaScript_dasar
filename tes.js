// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("JSUser");
//     }, 3000);
//   });
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//   console.log(`You are logged in as ${value}`);
// });
// console.log("Welcome!");
// function calculate(value) {
//   return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
// }

// console.log(calculate(3));
// let myString = "";

// try {
//   myString += "a";
//   throw Error();
// } catch (e) {
//   myString += "b";
// } finally {
//   myString += "c";
//   throw Error();
//   myString += "d";
// }

// console.log(myString);
function fetchUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("JSUser");
    }, 3000);
  });
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");