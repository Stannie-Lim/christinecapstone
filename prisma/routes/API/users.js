const express = require ('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/api/users', async (req, res) => {
    try {
      const users = await prisma.users.findMany({
        include: {
          orders: true,
          reviews: true,
        },
      });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/api/users', async (req, res) => {
    try {
      const fakeUser = {
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        Role: 'User',
        Avatar: faker.image.avatar(),
        Locale: faker.random.locale(),
        Email_Validated: faker.datatype.boolean(),
        Phone_Validated: faker.datatype.boolean(),
        Password_Hash: faker.internet.password(),
        Platform: faker.internet.userAgent(),
        Platform_User: faker.internet.userName(),
        name: faker.name.findName(),
      };
  
      const createdUser = await prisma.users.create({
        data: fakeUser,
      });
  
      res.json(createdUser);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  });