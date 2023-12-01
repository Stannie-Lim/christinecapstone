# Under-the-Tree
	by Jesus Moo, Christine Velez and Jeffrey Gaitan

## The purpose
Under the Tree is a ecommerce website for christmas, at the current moment the plan is to make the average ecommerce features (payment processing, Product searching, Great visuals)

### Specs
#### Base  Frameworks (Planned and currently using)
These are frameworks / Technologies that we either are planning on using or are currently using. Please note that this information may change as we may change frameworks in future development.
- PostGrestSQL (Prisma)
- React.Js for visuals
- Pagination
- Backend Pagination
- Faker.JS

Below is our current Database Schema.
![Database_Schema](/Readme_Content/Database_Schema_Image.png)


1. move routes/api out of the prisma folder. prisma folder should only hold db stuff
2. when i clone, npm i and npx prisma migrate whatever, and maybe npm run seed, everything should just run fully (no error msgs, no errors or anything)
3. you dont need to seed so much data. faker is only used to generate a random name, imageURL whatever. you'd use that randomly generated thing to create something in prisma
```
seed.js

for (let i = 0; i < 10; i++) {
	const randomName = faker.person.name();
	const randomEmail = faker.person.email();

	await prisma.users.create({
		name: randomName,
		email: randomEmail,
	});
}

for (let i = 0; i < 100; i++) {
	const productName = faker.commerce.product();
	const price = faker.commerce.price();

	await prisma.products.create({
		name: productName,
		price,
	});
}

npm run seed, and it should just create a bunch of data in your database
```
4. create a frontend to fetch data from your backend
5. test your code every single step you make (every like idk 5 lines of code maybe?)
6. this
```
app.use("/api/orderitems, require(.routes/API/orderitems)");
app.use("/api/orders, require(.routes/API/orders)");
app.use("/api/products, require(.routes/API/products)");
app.use("/api/reviews, require(.routes/API/reviews)");
app.use("/api/users, require(.routes/API/users)");
```
syntax is wrong
it's supposed ot be
```
app.use("/api/orderitems", require('./db/routes/API/orderitems)'));
app.use("/api/orders", require('./db/routes/API/orders)'));
app.use("/api/products", require('./db/routes/API/products)'));
app.use("/api/reviews", require('./db/routes/API/reviews)'));
app.use("/api/users", require('./db/routes/API/users)'));
```
7. dont use imports in node files (any files in backend do not use import- only use const ... require)
7.5 only use imports in vite files (react files)
8. express router syntax is incorrect
```
const router = require('express').Router();

const prisma = require('./prisma/client');

router.get('/api/order_items', async (req, res) => {
	try {
		const orderItems = await prisma.order_Items.findMany();

		res.json(orderItems);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
});


router.post('/api/order_items', async (req, res) => {
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

module.exports = router;
```
9. simplify your database. only focus on the MVP. for example-
products {
	id,
	name,
	description,
	categoryId,
	price,
}

users {
	id,
	user,
	password,
	orders[]
}

orders {
	id,
	order_items[]
	is_cart
}

order_items {
	products[]
	quantity
	order_id
}

categories {
	name,
	products[]
}
