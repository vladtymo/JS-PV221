// import module elements
const utils = require('./my_module');

console.log("Hello Node.js!");

let a = 10, b = 20;
console.log("Result: ", a + b);

// Node.js code does not have browser objects
// document.querySelector("h1").classList.add("muted");

global.message = "It is a global variable";

utils.showMessage("Bob");
utils.showMessage();

// start server steps:
// 1 - npm i
// 2 - cd server_directory
// 3 - node server_file