import _usersModel from './users.model'; 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes.js");


app.use("/api/orderitems, require(.routes/API/orderitems)");
app.use("/api/orders, require(.routes/API/orders)");
app.use("/api/products, require(.routes/API/products)");
app.use("/api/reviews, require(.routes/API/reviews)");
app.use("/api/users, require(.routes/API/users)");




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

