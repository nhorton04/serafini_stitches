import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joe Biden',
    email: 'joe@whitehouse.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
  {
    name: 'Donald Trump',
    email: 'trump@whitehouse.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
  {
    name: 'Jack Johnson',
    email: 'jack@johnson.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
];

export default users;
