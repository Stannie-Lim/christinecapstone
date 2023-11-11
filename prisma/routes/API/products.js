const express = require ('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();



const categories = [
    'games',
    'tools',
    'cellphones',
    'purses',
    'giftwrapping',
    'jewelry',
    'clothing',
    'movies',
    'watches',
  ];
  

  app.get('/api/products', async (req, res) => {
    try {
      const products = await prisma.products.findMany({
        include: {
          order_Items: true,
          reviews: true,
        },
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  app.post('/api/products', async (req, res) => {
    try {
      const fakeProduct = {
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: faker.random.float({ min: 1, max: 1000, precision: 0.01 }),
        Is_Discounted: faker.datatype.boolean(),
        Discount_Value: faker.random.float({ min: 0.1, max: 0.5, precision: 0.01 }),
      };
  
      const createdProduct = await prisma.products.create({
        data: fakeProduct,
      });
  
      res.json(createdProduct);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  });
  

  app.get('/api/categories', (req, res) => {
    res.json(categories);
  });