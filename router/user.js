const express = require("express");
const UserController = require("../controller/UserController");
const routeUser = express.Router();


routeUser.post('/register', UserController.register);

module.exports = routeUser;