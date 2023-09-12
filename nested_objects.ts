// Example 1 with type Keyword.

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: {
    name: string;
    address: string;
    phone: number;
  };
};

const airplane: Airplane = {
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

// Example 2. Abstracting Nested Objects Into Separate Types

type Carterer = {
  name: string;
  address: string;
  phone: number;
};

type Airplane1 = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Carterer;
};

const airplane1: Airplane1 = {
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

// Example 3.. Using Index Signatures With Nested Objects.
// Index Signature is used when we don't know all the names of  type's properties and the shape of value.
type Seat = {
  [key: string]: string | boolean | number;
};

type Airplane2 = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Carterer;
  seat: Seat[];
};

const airPlane2: Airplane2 = {
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

// Example 4.
interface officeaddress {
  city: string;
  country: string;
  [key: string]: any;
}

interface employee {
  name: string;
  salary: number;
  officeaddress: officeaddress;
  isPaid: boolean;
}

const Employee: employee = {
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
