type user = {
  name: string;
  Id: string;
};

type Admin = {
  users_name: string;
  ID: string;
};

let Group: user | Admin = { name: "Ali", Id: "123" };
Group = { users_name: "Rashid", ID: "235" };

function user(name: string[] | string) {
  // name.slice(0, 2);
  //   if (typeof name === "string") {
  // console.log(name.toLowerCase());
  //   }
}
user("RASHID");

export {};
