const { Blog } = require("../models")
const { validationResult } = require('express-validator');


const blogController = {}

/*
    this is auto generate example, you can continue

*/
blogController.index = async(req, res) => {
    res.json({
        message: "Hello blogController"
    })
}

blogController.getAll = async(req, res) => {
    const getBlog = await Blog.findAll({
        include: [{
            model: Blog
        }]
    });
    res.json({
        data: getBlog
    })
}

blogController.getById = async(req, res) => {
    const { id } = req.params
    try {
        const getDetailBlog = await Blog.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: getDetailBlog
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}

blogController.create = async(req, res) => {
    console.log(req.file)
        // const { title, body } = req.body
        // const { image } = req.file.path;
        // try {
        //     let post = await model.Blog.create({
        //             title: req.body.title,
        //             body: req.body.body,
        //             image: req.file.path
        //         })
        //         // const createBlog = await Blog.create({
        //         //     title: title,
        //         //     body: body,
        //         //     image: image
        //         // })
        //     return res.status(201).json({
        //         message: 'Data Berhasil Ditambahkan !'
        //     })
        // } catch (error) {
        //     return res.status(500).json({

    //         message: error
    //     })
    // }
}

blogController.update = async(req, res) => {
    const { title, body, image } = req.body
    const { id } = req.params
    try {
        const getDetailBlog = await Blog.findOne({
            where: {
                id: id
            }
        });
        if (getDetailBlog == null) {
            return res.status(404).json({
                message: 'data tidak ditemukan !'
            })
        }
        const updateBlog = await Blog.update({
            title: title,
            body: body,
            image: image
        }, {
            where: {
                id: id
            }
        })
        return res.status(200).json({
            message: 'blog berhasil diubah'
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}


blogController.delete = async(req, res) => {
    const { id } = req.params
    try {
        const deleteBlog = await Blog.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).json({
            message: 'Data Berhasil Dihapus !'
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}



module.exports = blogController