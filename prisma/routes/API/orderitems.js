const express = require('express');
const bodyParser = require('body-parser');
const prisma = require('./prisma/client');

app.get('/api/order_items', async (req, res) => {
    try {
      const orderItems = await prisma.order_Items.findMany();
  
      res.json(orderItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  app.post('/api/order_items', async (req, res) => {
    try {
      const newOrderItem = req.body;
      const createdOrderItem = await prisma.order_Items.create({
        data: newOrderItem,
      });
  
      res.json(createdOrderItem);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  });
  