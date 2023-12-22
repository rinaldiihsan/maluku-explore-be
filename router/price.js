const express = require('express');
const PriceController = require('../controller/PriceController');
const app = express();
app.use(express.json());

const routePrice = express.Router();

routePrice.get('/get', PriceController.getAll);
routePrice.get('/get/:id', PriceController.getById);
routePrice.post('/create', PriceController.create);
routePrice.put('/update/:id', PriceController.update);
routePrice.delete('/delete/:id', PriceController.delete);

module.exports = routePrice;