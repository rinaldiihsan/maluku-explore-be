const { Order, User, tour } = require('../models');

const OrderController = {};

/*
    this is auto generate example, you can continue

*/
OrderController.index = async (req, res) => {
  res.json({
    message: 'Hello OrderController',
  });
};

OrderController.getAll = async (req, res) => {
  try {
    const getAllOrder = await Order.findAll();
    return res.status(200).json({
      data: getAllOrder,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

OrderController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDetailOrder = await Order.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getDetailOrder,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

OrderController.create = async (req, res) => {
  const { userId, tempatWisataId, jumlahTiket, tanggalOrder, totalHarga } = req.body;
  try {
    const getUserId = await User.findOne({
      where: {
        id: userId,
      },
    });
    const getTempatWisataId = await tour.findOne({
      where: {
        id: tempatWisataId,
      },
    });
    if (getUserId === null) {
      throw Error('data tidak ditemukan');
    }
    if (getTempatWisataId === null) {
      throw Error('data tidak ditemukan');
    } else {
      const createOrder = await Order.create({
        userId: getUserId.id,
        tempatWisataId: getTempatWisataId.id,
        jumlahTiket: jumlahTiket,
        tanggalOrder: tanggalOrder,
        totalHarga: totalHarga,
      });
      return res.status(200).json({
        message: 'data berhasil ditambahkan',
      });
    }
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
};

OrderController.update = async (req, res) => {
  const { userId, tempatWisataId, jumlahTiket, tanggalOrder, totalHarga } = req.body;
  const { id } = req.params;
  try {
    const getDetailOrder = await Order.findOne({
      where: {
        id: id,
      },
    });
    if (getDetailOrder == null) {
      return res.status(404).json({
        message: 'data tidak ditemukan !',
      });
    }
    const updateOrder = await Order.update(
      {
        userId: userId,
        tempatWisataId: tempatWisataId,
        jumlahTiket: jumlahTiket,
        tanggalOrder: tanggalOrder,
        totalHarga: totalHarga,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      message: 'data berhasil diubah',
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

OrderController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOrder = await Order.destroy({
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

module.exports = OrderController;
