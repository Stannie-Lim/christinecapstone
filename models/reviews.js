const faker = require('faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function generateFakeReviews() {
  const numReviews = 10;

  for (let i = 0; i < numReviews; i++) {
    const fakeReview = {
      user_id: faker.datatype.number({ min: 1, max: 10 }), 
      products_id: faker.datatype.number({ min: 1, max: 10 }), 
      rating: faker.random.float({ min: 1, max: 5, precision: 0.1 }),
      comment: faker.lorem.paragraph(),
      created_At: faker.date.past(),
    };

    try {
      await prisma.reviews.create({
        data: fakeReview,
      });

      console.log(`Review ${i + 1} created successfully.`);
    } catch (error) {
      console.error(`Error creating review ${i + 1}:`, error);
    }
  }

  console.log('Fake reviews generation complete.');
}

generateFakeReviews()
  .catch((error) => {
    console.error('Error generating fake reviews:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });