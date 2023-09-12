// Example 1 with type Keyword.
const airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 1452125,
    },
};
console.log(airplane.caterer.name);
console.log(airplane.timeOfArrival);
const airplane1 = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Flaetti Hotel",
        address: "11 A Edgerton Road, Lahore",
        phone: 4299201136,
    },
};
const airPlane2 = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Flaetti Hotel",
        address: "11 A Edgerton Road, Lahore",
        phone: 4299201136,
    },
    seat: [
        {
            name: "Ali",
            seatno: 12,
        },
        {
            name: "Haider",
            seatno: 13,
            parcel: true,
        },
    ],
};
const Employee = {
    name: "Rashid Ali",
    salary: 45000,
    officeaddress: {
        city: "Gujranwala",
        country: "Pakistan",
        street: "Street No. 2, Gujranwala",
    },
    isPaid: true,
};
console.log(Employee.officeaddress.street);
export {};
