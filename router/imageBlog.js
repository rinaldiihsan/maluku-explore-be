const express = require('express');
const imagesBlogController = require('../controller/imagesBlogController');
const multer = require('multer');

const routerImageBlog = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/imagesBlog');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

routerImageBlog.get('/get', imagesBlogController.getAll);
routerImageBlog.get('/get/:id', imagesBlogController.getById);
routerImageBlog.post('/create', upload.single('image'), imagesBlogController.create);
routerImageBlog.put('/update/:id', upload.single('image'), imagesBlogController.update);
routerImageBlog.delete('/delete/:id', imagesBlogController.delete);

module.exports = routerImageBlog;
