const express = require("express");
const blogController = require("../controller/blogController")
const routeBlog = express.Router();


routeBlog.post('/create', blogController.create);
routeBlog.delete('/delete',blogController.delete)

module.exports = routeBlog;