// Method 1
function createUser(user: { name: string; isPaid: boolean }) {}

let newUser = { name: "Ali", isPaid: false, email: "Saqlain788@gmail.com" };
createUser(newUser);

// Method 2
function createCourse(): { name: string; price: number } {
  return { name: "ReactJS", price: 399 };
}
createCourse();
