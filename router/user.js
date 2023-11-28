const express = require("express");
const UserController = require("../controller/UserController");
const routeUser = express.Router();


routeUser.post('/register', UserController.register);
routeUser.post('/login',UserController.login)

module.exports = routeUser;