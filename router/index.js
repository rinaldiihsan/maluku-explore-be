const express = require("express");
const exampleController = require("../controller/exampleController");
const routeUser = require('../router/user')
const route = express.Router()

route.get('/', exampleController.index)
route.use('/auth', routeUser)

module.exports = route