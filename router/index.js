const express = require('express');
const exampleController = require('../controller/exampleController');
const routeUser = require('./user');
const routeBlog = require('./blog');
const routerImageBlog = require('./imageBlog');
const route = express.Router();

route.get('/', exampleController.index);
route.use('/auth', routeUser);
route.use('/blog', routeBlog);
route.use('/imageBlog', routerImageBlog);



module.exports = route;
