const faker = require('faker');


function generateProductCategory(categoryName) {
  return {
    name: categoryName,
    description: faker.lorem.sentence(),
  };
}


function generateProduct(categoryName) {
  return {
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    category: categoryName,
  };
}

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

const productCategories = [];
const products = [];

categories.forEach((category) => {
  const productCategory = generateProductCategory(category);
  productCategories.push(productCategory);

  for (let j = 0; j < 10; j++) {
    const product = generateProduct(category);
    products.push(product);
  }
});


console.log('Product Categories:');
console.log(productCategories);
console.log('\nProducts:');
console.log(products);

app.use(bodyParser.json());