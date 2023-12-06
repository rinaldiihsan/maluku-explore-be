const express = require("express");
<<<<<<< HEAD
const blogController = require("../controller/BlogController");
=======
const blogController = require("../controller/blogController");

>>>>>>> c86f7c804bcfc46b640364823dc3a3ca909bb9f7
const routeBlog = express.Router();

const multer = require('multer');
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './img');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toString() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'img/png' || file.mimetype === 'img/jpg' || file.mimetype === 'img/jpeg') {
        cb(null, true);
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

const app = express(); // Initialize Express app here

app.use(express.json()); // Add this line to parse JSON requests

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message || 'Terjadi kesalahan server';
    res.status(status).json({ message: message });
})

app.post('/api/blog/create', upload.single('image'), blogController.create);

routeBlog.get('/get', blogController.getAll);
routeBlog.get('/get/:id', blogController.getById);
routeBlog.post('/create', blogController.create);
routeBlog.put('/update/:id', blogController.update);
routeBlog.delete('/delete/:id', blogController.delete);

module.exports = routeBlog;