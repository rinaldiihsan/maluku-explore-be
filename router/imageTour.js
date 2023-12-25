const express = require('express');
const imagesTourController = require('../controller/imagesTourController');
const multer = require('multer');


const routeImageTour = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/imagesTour');
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

routeImageTour.get('/get', imagesTourController.getAll);
routeImageTour.get('/get/:id', imagesTourController.getById);
routeImageTour.get('/get-image/:id', imagesTourController.getImageById);
routeImageTour.post('/create', upload.single('image'), imagesTourController.create);
routeImageTour.put('/update/:id', upload.single('image'), imagesTourController.update);
routeImageTour.delete('/delete/:id', imagesTourController.delete);

module.exports = routeImageTour;
