// ------------ console ------------
console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

// ------------ variables & data types ------------
let number = 10;                    // number
let koef = 1.85;                    // number
let result = "hello" * "goodbye";   // number (NaN)

let length = 100000000000n;         // BigInt

let email = "example@ukr.net";      // string
let login = 'vlad_"tm"';            // string
let letter = 'A';                   // string

let isValid = true;                 // Boolean

let undefVar;                       // undefined
let account = null;                 // null

// ------- const
const id = 3344;
// id += 2; - error

console.log(isNaN(result));

// Symbol type
let s1 = Symbol("4747-45");         // Symbol
let s2 = Symbol("4747-45");

console.log(s1 == s1); // true
console.log(s1 == s2); // false

// funciton
let add = function (a, b) { console.log(a + b); }
let mult = (a, b) => console.log(a * b);

add(4, 8);

// objects
let user = { id: 1003, login: "blabla" };
user.id = 4000;
user.id += 10;
user.id++;

console.log("ID: ", user.id);

// arrays
let arr = [10, -4, 4.1, "red", 'green', true, [1, 2, 3], mult];

arr[0]; // 10
console.log(arr.length); // 7
arr[6][1]; // 2
arr.push(90);
arr[7](6, 10); // invoke
console.log(arr);

// JS has dynamic/weak/duck typing
number = "4500$";

// typeof(expression) - check type
console.log(typeof (number));            // number
console.log(typeof (arr));               // object
console.log(typeof (user));              // object
console.log(typeof (s1));                // Symbol
console.log(typeof (undefVar));          // undefined
console.log(typeof (account));           // obejct (this is bug)
console.log(typeof (add));               // funciton

// ------------ operators ------------
// concatination: str + str
console.log("Hello" + "Goodbye");

// interpolation: `...${expression}...`
console.log(`Hello dear, ${login}!`);

Math.random(); // returns random value in range [0...1) - 0.5464363754

// ------------ browser dialogs ------------
alert("Some alert message!");

const address = prompt("Enter your email:");

// convert string to number: +"str"
const year = +prompt("Enter current year:");

console.log("Current year", year);
console.log("Next year", year + 1);

const love = confirm("Do you love JS?");

console.log(`I ${love ? "love" : "don't love"} JavaSpirt!`);
