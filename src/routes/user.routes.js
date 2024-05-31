const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controllers/user.controller');

const app = express();

app.use(bodyParser.json());

app.get('/users', userController.getAllUsers);
app.get('/user/:id', userController.getUserById);
app.post('/user', userController.createUser);
app.put('/user/:id', userController.updateUser);
app.delete('/user/:id', userController.deleteUser);

module.exports = app;
