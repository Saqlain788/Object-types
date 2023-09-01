type User = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

let myUser: User = {
  _id: 1234,
  name: "Ali",
  email: "S @gmail.com",
  isActive: false,
};

myUser.name = "Rashid";
// myUser._id = 345 // Error because this property is only for readyonly.

type creditNumber = {
  cardnumber: string;
};
type creditDate = {
  carddate: string;
};

type cardDate = creditDate &
  creditNumber & {
    cvv: number;
  };
