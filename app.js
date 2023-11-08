import _usersModel from './users.model'; 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes.js");



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use("api/routes", routes);