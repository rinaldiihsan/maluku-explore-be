const express = require('express');
const orderHistory = require('../controller/orderHistoryController');
const app = express();
app.use(express.json());

const routeOrderHistory = express.Router();

routeOrderHistory.get('/get', orderHistory.getAll);
routeOrderHistory.get('/get/:id', orderHistory.getById);
routeOrderHistory.post('/create', orderHistory.create);
routeOrderHistory.put('/update/:id', orderHistory.update);
routeOrderHistory.delete('/delete/:id', orderHistory.delete);

module.exports = routeOrderHistory;
