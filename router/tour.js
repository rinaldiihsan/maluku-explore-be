const express = require('express');
const TourController = require('../controller/TourController');
const app = express();
app.use(express.json());

const routeBlog = express.Router();

routeBlog.get('/get', TourController.getAll);
routeBlog.get('/get/:id', TourController.getById);
routeBlog.post('/create', TourController.create);
routeBlog.put('/update/:id', TourController.update);
routeBlog.delete('/delete/:id', TourController.delete);

module.exports = routeBlog;