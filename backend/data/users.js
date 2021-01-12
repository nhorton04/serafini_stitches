import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('Skyl1n31', 10),
    isAdmin: true,
  },
  {
    name: 'Joe Biden',
    email: 'joe@whitehouse.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Donald Trump',
    email: 'trump@whitehouse.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jack Johnson',
    email: 'jack@johnson.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
