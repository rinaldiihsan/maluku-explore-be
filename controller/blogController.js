const {Blog} = require("../models")

const blogController = {}
const blogUserController = {}

/*
    this is auto generate example, you can continue 

*/
blogController.index = async(req,res) => {
    res.json({
        message : "Hello blogController"
    })
}


blogController.create = async (req,res) => {
    const {title,body,image} = req.body
    try {
        const createBlog = await Blog.create({
            title : title,
            body : body,
            image : image
        })
        return res.status(201).json({
            message : 'Data Berhasil Ditambahkan !'
        })
    } catch (error) {
        return res.status(500).json({
            
            message : error
        })
    }
}

blogController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteBlog = await Blog.destroy({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message : 'Data Berhasil Dihapus !'
        })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
}


module.exports = blogController

