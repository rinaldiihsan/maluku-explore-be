const { tour } = require('../models');
const TourController = {}

/*
    this is auto generate example, you can continue

*/
TourController.index = async(req, res) => {
    res.json({
        message: "Hello TourController"
    })
}

TourController.getAll = async(req, res) => {
    try {
        const getAllTour = await tour.findAll();
        return res.status(200).json({
            data: getAllTour,
        });
    } catch (err) {
        return res.status(500).json({
            message: err,
        });
    }
};

TourController.getById = async(req, res) => {
    const { id } = req.params;
    try {
        const getDetailTour = await tour.findOne({
            where: {
                id: id,
            },
        });
        return res.status(200).json({
            data: getDetailTour,
        });
    } catch (err) {
        return res.status(500).json({
            message: err,
        });
    }
};

TourController.create = async(req, res) => {
    const { nama, kota, deskripsi, imageId } = req.body;
    try {
        const createTour = await tour.create({
            nama: nama,
            kota: kota,
            deskripsi: deskripsi,
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

TourController.update = async(req, res) => {
    const { nama, kota, deskripsi, imageId } = req.body;
    const { id } = req.params;
    try {
        const getDetailTour = await tour.findOne({
            where: {
                id: id,
            },
        });
        if (getDetailTour == null) {
            return res.status(404).json({
                message: 'data tidak ditemukan !',
            });
        }
        const updateTour = await tour.update({
            nama: nama,
            kota: kota,
            deskripsi: deskripsi,
            imageId: imageId,
        }, {
            where: {
                id: id,
            },
        });
        return res.status(200).json({
            message: 'data berhasil diubah',
        });
    } catch (err) {
        return res.status(500).json({
            message: err,
        });
    }
};

TourController.delete = async(req, res) => {
    const { id } = req.params;
    try {
        const deleteTour = await tour.destroy({
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




module.exports = TourController