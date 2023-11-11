const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const prisma = require('./prisma/client');

app.get('/api/reviews', async (req, res) => {
    try {
      const reviews = await prisma.reviews.findMany({
        include: {
          users: true,
          products: true,
        },
      });
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  app.post('/api/reviews', async (req, res) => {
    try {
      const fakeReview = {
        user_id: faker.datatype.number({ min: 1, max: 10 }), 
        products_id: faker.datatype.number({ min: 1, max: 10 }), 
        rating: faker.random.float({ min: 1, max: 5, precision: 0.1 }),
        comment: faker.lorem.paragraph(),
      };
  
      const createdReview = await prisma.reviews.create({
        data: fakeReview,
      });
  
      res.json(createdReview);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  });
  