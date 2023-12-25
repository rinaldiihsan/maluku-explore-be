const { orderHistory, Order, User, tour } = require('../models');

const orderHistoryController = {};

/*
    this is auto generate example, you can continue 

*/
orderHistoryController.index = async (req, res) => {
  res.json({
    message: 'Hello orderHistoryController',
  });
};

orderHistoryController.getAll = async (req, res) => {
  try {
    const getAllorderHistory = await orderHistory.findAll();
    return res.status(200).json({
      data: getAllorderHistory,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

orderHistoryController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDetailorderHistory = await orderHistory.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getDetailorderHistory,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

orderHistoryController.create = async (req, res) => {
  const { UserId, TempatWisataId, OrderId } = req.body;
  try {
    const getUserId = await User.findOne({
      where: {
        id: UserId,
      },
    });
    const getTempatWisataId = await tour.findOne({
      where: {
        id: TempatWisataId,
      },
    });
    const getOrderId = await Order.findOne({
      where: {
        id: OrderId,
      },
    });
    if (getUserId === null) {
      throw Error('data tidak ditemukan');
    }
    if (getTempatWisataId === null) {
      throw Error('data tidak ditemukan');
    }
    if (getOrderId === null) {
      throw Error('data tidak ditemukan');
    } else {
      const createorderHistory = await orderHistory.create({
        UserId: getUserId.id,
        TempatWisataId: getTempatWisataId.id,
        OrderId: getOrderId.id,
      });
      return res.status(200).json({
        message: 'data berhasil ditambahkan',
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

orderHistoryController.update = async (req, res) => {
  const { UserId, TempatWisataId, OrderId } = req.body;
  const { id } = req.params;
  try {
    const getDetailorderHistory = await orderHistory.findOne({
      where: {
        id: id,
      },
    });
    const getUserId = await User.findOne({
      where: {
        id: UserId,
      },
    });
    const getTempatWisataId = await tour.findOne({
      where: {
        id: TempatWisataId,
      },
    });
    const getOrderId = await Order.findOne({
      where: {
        id: OrderId,
      },
    });
    if (getUserId === null) {
      throw Error('data tidak ditemukan');
    }
    if (getTempatWisataId === null) {
      throw Error('data tidak ditemukan');
    }
    if (getOrderId === null) {
      throw Error('data tidak ditemukan');
    } else {
      const updateorderHistory = await orderHistory.update(
        {
          UserId: getUserId.id,
          TempatWisataId: getTempatWisataId.id,
          OrderId: getOrderId.id,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        message: 'data berhasil diubah!',
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

orderHistoryController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const getDetailorderHistory = await orderHistory.findOne({
      where: {
        id: id,
      },
    });
    if (getDetailorderHistory === null) {
      throw Error('data tidak ditemukan');
    } else {
      const deleteorderHistory = await orderHistory.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).json({
        message: 'data berhasil dihapus!',
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = orderHistoryController;
