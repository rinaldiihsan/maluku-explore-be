const { blog } = require('../models');
const blogController = {};

blogController.index = async (req, res) => {
  res.json({
    message: 'Hello blogController',
  });
};

blogController.getAll = async (req, res) => {
  try {
    const getAllBlog = await blog.findAll();
    return res.status(200).json({
      data: getAllBlog,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

blogController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDetailBlog = await blog.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getDetailBlog,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

blogController.create = async (req, res) => {
  const { title, body, imageId } = req.body;
  try {
    const createBlog = await blog.create({
      title: title,
      body: body,
      imageId: imageId,
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

blogController.update = async (req, res) => {
  const { title, body, imageId } = req.body;
  const { id } = req.params;
  try {
    const getDetailBlog = await blog.findOne({
      where: {
        id: id,
      },
    });
    if (getDetailBlog == null) {
      return res.status(404).json({
        message: 'data tidak ditemukan !',
      });
    }
    const updateBlog = await blog.update(
      {
        title: title,
        body: body,
        imageId: imageId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      message: 'blog berhasil diubah',
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

blogController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBlog = await blog.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: 'Data Berhasil Dihapus !',
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = blogController;
