let user = ["ali", 123, true];
let rgb = [123, 321, 452];
const User = [123, "Riaz"];
console.log(User);
// define our tuple
let ourTuple;
// initialized incorrectly which throws an error
ourTuple = [5, false, "Coding God was mistaken"];
ourTuple.push("Something new and wrong"); // Tuples allows you to push any value
console.log(ourTuple);
export {};
// Error in readonly Tuples while pushing something.
/*
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');
*/
