const express = require('express');
const exampleController = require('../controller/exampleController');
const routeUser = require('./user');
const routeBlog = require('./blog');
const routerImageBlog = require('./imageBlog');
const routerTour = require('./tour');
const routeImageTour = require('./imageTour');
const routePrice = require("./price")
const routeOrder = require("./order")
const route = express.Router();

route.get('/', exampleController.index);
route.use('/auth', routeUser);
route.use('/blog', routeBlog);
route.use('/imageBlog', routerImageBlog);
route.use('/tour', routerTour);
route.use('/imageTour', routeImageTour);
route.use('/price', routePrice);
route.use('/order', routeOrder);

module.exports = route;