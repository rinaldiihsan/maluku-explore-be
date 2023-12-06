const express = require('express');
const blogController = require('../controller/blogController');
const app = express();
app.use(express.json());

const routeBlog = express.Router();

routeBlog.get('/get', blogController.getAll);
routeBlog.get('/get/:id', blogController.getById);
routeBlog.post('/create', blogController.create);
routeBlog.put('/update/:id', blogController.update);
routeBlog.delete('/delete/:id', blogController.delete);

module.exports = routeBlog;
