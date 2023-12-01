steps to get back on track
1. seed a bunch of products (maybe like 50 idk, make sure you use a for loop, dont actually write 50 lines of code to seed data)
2. make an api route to serve the products route (use express router, dont just put the route in your app.js. put the route in its own file, export it, import it in your app.js)
3. on your frontend, fetch all the products and display it on your homepage
3.5. login/register/logout. authentication part
4. on your frontend, create a "add to cart" button for each product
5. when clicking on the button, make a call to your backend to put the product in your cart
6. on your backend, make a route to allow for putting product into cart. make sure it gets put into the database. you should be thinking about quantity (like adding item X 5 times should not have 5 X in your cart. it should have 1 X but have a quantity of 5)
7. on frontend, create a view to see everything in your cart. dont even think about modifying cart for now, just display the cart
8. in the cart view, create a checkout button. it should bring you to another view that allows user to put in card information
9. it should have a "purchase" button. after that, the cart should become an order. maybe you can redirect to confirmation page
10. modify cart? like remove item from cart, decrement quantity, increment quantity
11. anything past here is just flex features
12. https://youtu.be/-vIOlK3w_8I cheat code

---

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
