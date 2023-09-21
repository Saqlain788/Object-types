// Assigning values to a variable of type unknown:
let value: unknown;

value = true; // Fine
value = 42; // Fine
value = "hey!"; // Fine
value = []; // Fine
value = {}; // Fine
value = Math.random; // Fine
value = null; // Fine
value = undefined; // Fine
value = () => {
  console.log("Hey again!");
}; // Fine

// Assigning values of various types to a variable of type any:

let value2: any;

value2 = true; // Fine
value2 = 42; // Fine
value2 = "hey!"; // Fine
value2 = []; // Fine
value2 = {}; // Fine
value2 = Math.random; // Fine
value2 = null; // Fine
value2 = undefined; // Fine
value2 = () => {
  console.log("Hey again!");
}; // Fine

// Assigning a value of type unknown to variables of other types:

let val: unknown;

const val1: unknown = val; // Fine
const val2: any = val; // Fine

export {};
