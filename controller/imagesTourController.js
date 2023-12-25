const { imagesTour } = require('../models');
const imagesTourController = {};
const path = require('path');

/*
    this is auto generate example, you can continue 

*/
imagesTourController.index = async (req, res) => {
  res.json({
    message: 'Hello imagesTourController',
  });
};

imagesTourController.getAll = async (req, res) => {
  try {
    const getAllImageTour = await imagesTour.findAll();
    return res.status(200).json({
      data: getAllImageTour,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesTourController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDetailImageTour = await imagesTour.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getDetailImageTour,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesTourController.create = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: 'Berkas tidak ditemukan dalam permintaan.',
      });
    }

    const imagePath = req.file.path;

    const createImageTour = await imagesTour.create({
      image: imagePath,
    });

    return res.status(201).json({
      message: 'Gambar Berhasil Ditambahkan!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesTourController.getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const image = await imagesTour.findOne({
      attributes: ['image'],
      where: {
        id: id,
      },
    });

    if (!image) {
      return res.status(404).json({
        message: 'Image not found',
      });
    }

    const imagePath = path.join(__dirname, '..', image.image);
    return res.sendFile(imagePath);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesTourController.update = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  try {
    const updateImageTour = await imagesTour.update(
      {
        image: image,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(201).json({
      message: 'Gambar Berhasil Diupdate!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesTourController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteImageTour = await imagesTour.destroy({
      where: {
        id: id,
      },
    });

    return res.status(201).json({
      message: 'Gambar Berhasil Dihapus!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = imagesTourController;
