// Case 1. Object type
function printCoord(pt) {
    console.log("the coordinate x value is =" + pt.x);
    console.log("the coordinate y value is =" + pt.y);
}
printCoord({ x: 12, y: 14 });
//* Case 2. Add optional properties with the sign (?)
function printName(obj) {
    console.log("First" + obj.first);
    console.log("Last" + obj.last);
}
printName({ first: "Ali" });
printName({ first: "Ali", last: "Raza" });
//? Case 3. Optional object property shows undefined types
function printNames(obj) {
    // Error - might crash if 'obj.last' wasn't provided!
    //   console.log(obj.last.toUpperCase());
    //   if (obj.last !== undefined) {
    //     // OK
    //     console.log(obj.last.toUpperCase());
    //   }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
printName({ first: "Rashid", last: "sahib" });
//! Case 4, Union Types
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");
// printId({ myID: 22342 }); // Error Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
//* Working with union types
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["Jameel", "Wasif"]);
export {};
