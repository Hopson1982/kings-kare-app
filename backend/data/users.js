import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Keenan Pearson",
    email: "keenan.pearson@wwt.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Peter Parker",
    email: "peter.parker@spidey.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
