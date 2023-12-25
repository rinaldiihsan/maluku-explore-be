const express = require('express');
const OrderController = require('../controller/OrderController');
const app = express();
app.use(express.json());

const routeOrder = express.Router();

routeOrder.get('/get', OrderController.getAll);
routeOrder.get('/get/:id', OrderController.getById);
routeOrder.post('/create', OrderController.create);
routeOrder.put('/update/:id', OrderController.update);
routeOrder.delete('/delete/:id', OrderController.delete);

module.exports = routeOrder;