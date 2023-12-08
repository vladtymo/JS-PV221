// -=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-
// 1 - create array using new
// var array = new Array();
// var array = new Array(10);
// var array = new Array(4, 6, -1);

// 2 - create array using []
let array = [];

let colors = ["red", "green", "blue", "black"];
const mixed = [120, null, "hello", true, [1, 2, 3], { id: 1002, title: "Super" }, (a, b) => a + b];

colors[3] = "pink";
// all values between are undefined
// [4]...[19]: undefined
colors[20] = "white";

console.log("[3]:", colors[3]);     // "black"
console.log("[4]:", colors[4]);     // undefined
console.log("[20]:", colors[20]);   // white

console.log("Colors arr length: ", colors.length);

// access by index: 0>
console.log("Colors: ", colors);

colors[0] = "yellow";
console.log("First color: ", colors[0]);
console.log("Mixed arr length: ", mixed.length); // 6

console.log("Is Array: ", Array.isArray(colors));

// ------------ methods
colors.pop();           // remove last
colors.push("purple");  // insert last
colors.shift();         // remove first
colors.unshift("brown");// insert first

console.log("Colors: ", colors);

let numbers = [4, 60, 1, -1, 0, -3, 99, -4, 120, 1, -4, 44, -10];

console.log("Numbers:", numbers);

console.log("Index of 1: ", numbers.indexOf(1)); // 2
console.log("Last Index of 1: ", numbers.lastIndexOf(1)); // 1
console.log("Index of 66 from [10]: ", numbers.indexOf(66, 10)); // if not found: -1

let firstHalf = numbers.slice(0, numbers.length / 2);
console.log("First Half:", firstHalf);

numbers[numbers.length - 1]; // last

numbers.splice(1, 3);
console.log("After splice:", numbers);

numbers.sort(); // lexicograph mode
console.log("Sorted Numbers:", numbers);

// comparison result: 
// 0 - element are equals
// <0 - 1st < 2st
// >0 - 1st > 2st
numbers.sort((a, b) => a - b);
console.log("Custom sort Numbers:", numbers);

numbers.fill(777, 1, 3);
console.log("Numbers:", numbers);

// return copy array with true values
console.log("Filtered: ", numbers.filter((x) => x < 0));

// return copy array with mapped values
console.log("Mapped:", numbers.map(x => x * 2));
console.log("Mapped:", numbers.map((x) => x > 0 ? x + '!' : x));

// we can use method chain: method1().method2()
console.log(numbers.slice(3, 7).map((x) => x * x));

console.log("Reversed:", numbers.reverse());

numbers = [4, 3, 6, 2, 10, 9];

// result: 7
// item: 4
const summ = numbers.reduce((result, current) => result + current, 0);
console.log("Summ:", summ); // 25

// [r]ed + [g]reen + [b]lue = 'rgb'
const letters = colors.reduce((res, c) => res + c[0], '');
console.log("Letters:", letters.toUpperCase()); // 'RGB'

// -------------- loops
// for, while, do while

// ---- for in: iterate over item keys
for (const key in colors) {
    console.log(key);
}

for (const value of colors) {
    console.log(value);
}

colors.forEach(x => {
    console.log(x);
})