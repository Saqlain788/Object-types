interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleID?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}
// Re-opening of Interface and reinject the values.
interface User {
  gitHubID: string;
}
// Extends property.
interface Admin extends User {
  role: "Admin" | "User";
}
const Ali: Admin = {
  dbId: 12,
  email: "s@gmail.com",
  userId: 788,
  role: "Admin",
  gitHubID: "Saqlain788", // Add new Github ID
  startTrail() {
    return "Rashid";
  },
  getCoupon(name: "Saqlain", value: 123) {
    return 10;
  },
};
console.log(Ali.getCoupon);
