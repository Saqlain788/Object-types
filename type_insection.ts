// Example 1.
interface Student {
  student_id: number;
  name: string;
}
interface Teacher {
  Teacher_Id: number;
  teacher_name: string;
}
type intersected_type = Student & Teacher;
let obj: intersected_type = {
  student_id: 3232,
  name: "saqlain",
  Teacher_Id: 7873,
  teacher_name: "Rashid",
};

console.log(obj.Teacher_Id);
console.log(obj.name);

// Example 2.

interface A {
  firstName: string;
  lastName: string;
}

interface B {
  firstName: number;
  lastName: string;
}

type AB = A & B;
let obj1: AB;
let obj2: AB;
/*
// Type 'number' is not assignable to type 'never'.
obj1.firstName = 20;
console.log(obj1.firstName);

//
obj2.lastName = "c";
console.log(obj2.lastName);*/
