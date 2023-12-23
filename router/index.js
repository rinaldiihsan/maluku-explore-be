const express = require('express');
const exampleController = require('../controller/exampleController');
const routeUser = require('./user');
const routeBlog = require('./blog');
const routerImageBlog = require('./imageBlog');
const routerTour = require('./tour');
const routeImageTour = require('./imageTour');
const routeOrder = require('./order');
const routeOrderHistory = require('./orderHistory');
const route = express.Router();

route.get('/', exampleController.index);
route.use('/auth', routeUser);
route.use('/blog', routeBlog);
route.use('/imageBlog', routerImageBlog);
route.use('/tour', routerTour);
route.use('/imageTour', routeImageTour);
route.use('/order', routeOrder);
route.use('/orderHistory', routeOrderHistory);

module.exports = route;
