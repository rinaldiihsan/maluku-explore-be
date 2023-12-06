const { imagesBlog } = require('../models');
const imagesBlogController = {};
const path = require('path');

/*
    this is auto generate example, you can continue 

*/
imagesBlogController.index = async (req, res) => {
  res.json({
    message: 'Hello imagesBlogController',
  });
};

imagesBlogController.getAll = async (req, res) => {
  try {
    const getAllImagesBlog = await imagesBlog.findAll();
    return res.status(200).json({
      data: getAllImagesBlog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


imagesBlogController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDetailImagesBlog = await imagesBlog.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getDetailImagesBlog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesBlogController.create = async (req, res) => {
  const imagePath = req.file.path;
  try {
    const createImagesBlog = await imagesBlog.create({
      image: imagePath,
    });

    return res.status(201).json({
      message: 'Data Berhasil Ditambahkan!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesBlogController.update = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  try {
    const updateImagesBlog = await imagesBlog.update(
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
      message: 'Data Berhasil Diupdate!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

imagesBlogController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteImagesBlog = await imagesBlog.destroy({
      where: {
        id: id,
      },
    });

    return res.status(201).json({
      message: 'Data Berhasil Dihapus!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = imagesBlogController;
