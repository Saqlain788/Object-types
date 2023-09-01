interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleID?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const Ali: User = {
  dbId: 12,
  email: "s@gmail.com",
  userId: 788,
  startTrail() {
    return "Rashid";
  },
  getCoupon(name: "Saqlain", value: 123) {
    return 10;
  },
};
console.log(Ali.getCoupon);
