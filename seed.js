const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

const seed = async () => {
  // name        String
  // description String

  for (let i = 0; i < 10; i++) {
    const categoryName = faker.commerce.department();
    const categoryDescription = faker.commerce.productDescription();

    await prisma.categories.create({
      data: {
        name: categoryName,
        description: categoryDescription,
      },
    });
  }
};

seed();
