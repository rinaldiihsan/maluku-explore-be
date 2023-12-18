const express = require('express');
const UserController = require('../controller/UserController');
const routeUser = express.Router();
const verifyToken = require('../middleware/VerifyToken');
const refreshTokenController = require('../controller/refreshTokenController');

routeUser.post('/register', UserController.register);
routeUser.post('/login', UserController.login);
routeUser.delete('/logout', UserController.logout);
routeUser.get('/get', verifyToken, UserController.getAllUser);
routeUser.get('/token', refreshTokenController);

module.exports = routeUser;
