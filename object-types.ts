// Case 1. Object type
function printCoord(pt: { x: number; y: number }) {
  console.log("the coordinate x value is =" + pt["x"]);
  console.log("the coordinate y value is =" + pt.y);
}
printCoord({ x: 12, y: 14 });

//* Case 2. Add optional properties with the sign (?)

function printName(obj: { first: string; last?: string }) {
  console.log("First" + obj.first);
  console.log("Last" + obj.last);
}
printName({ first: "Ali" });
printName({ first: "Ali", last: "Raza" });

//? Case 3. Optional object property shows undefined types
function printNames(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  // console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
printName({ first: "Rashid", last: "sahib" });

//! Case 4, Union Types on primitive data types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);

printId("202");

// printId({ myID: 22342 }); // Error Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
// Narrow the union with code.
function printId1(id: number | string) {
  if (typeof id === "string") {
    console.log("ID is", id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId1("ali");
//* Working with union types with non-primitive data types
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
welcomePeople(["Jameel", "Wasif"]);
// common types of array and string.
function printId2(id: string[] | string) {
  console.log(id.slice(0, 3));
}
printId2("aliraza");
export {};
