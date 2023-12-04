const express = require("express");
const exampleController = require("../controller/exampleController");
const routeUser = require('../router/user')
const routeBlog = require('./blog')
const route = express.Router()

route.get('/', exampleController.index)
route.use('/auth', routeUser)
route.use('/blog', routeBlog)

module.exports = route