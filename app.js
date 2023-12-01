const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.get("/categories", async (req, res, next) => {
  res.send(await prisma.categories.findMany());
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
