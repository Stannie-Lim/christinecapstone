const express = require('express');
const bodyParser = require('body-parser');
const prisma = require('./prisma/client');



app.get('/api/orders', async (req, res) => {
  try {
    const orders = await prisma.orders.findMany({
      include: {
        users: true,
        order_Items: true,
      },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = req.body;
    const createdOrder = await prisma.orders.create({
      data: newOrder,
    });
    res.json(createdOrder);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});