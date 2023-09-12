const Ali = {
    dbId: 12,
    email: "s@gmail.com",
    userId: 788,
    startTrail() {
        return "Rashid";
    },
    getCoupon(name, value) {
        return 10;
    },
};
console.log(Ali.getCoupon);
export {};
