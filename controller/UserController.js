const { Op } = require("sequelize")
const { User } = require("../models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")

dotenv.config()
const UserController = {}
    /*
        this is auto generate example, you can continue

    */

UserController.index = async(req, res) => {
    res.json({
        message: "Hello UserController"
    })
}


UserController.login = async(req, res) => {
    try {
        const { email, password } = req.body
        const findUser = await User.findOne({
            where: {
                email: {
                    [Op.like]: `%${email}%`
                }
            }
        })
        const comparePassword = await bcrypt.compare(password, findUser.password)
        if (comparePassword) {
            const payloadToken = {
                id: findUser.id,
                email: findUser.email,
                userName: findUser.userName
            }
            const token = jwt.sign(payloadToken, process.env.PRIVATE_KEY, {
                algorithm: 'HS256',
                expiresIn: '1h'
            })
            return res.status(200).json({
                data: {
                    message: "Berhasil Login !",
                    token: token
                }
            })
        } else {
            return res.status(401).json({
                data: {
                    message: "Gagal login, UserName dan Password Salah !",
                }
            })
        }
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                data: {
                    message: "Gagal Login !",
                    token: error.message
                }
            })
        } else {
            return res.status(401).json({
                data: {
                    message: "Gagal Login !",
                    token: error.message
                }
            })
        }
    }
}


UserController.register = async(req, res) => {
    const { namaLengkap, email, password } = req.body
    const saltRounds = 10;
    const generateSalt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, generateSalt)
    try {
        const createUser = await User.create({
            namaLengkap: namaLengkap,
            email: email,
            password: hashPassword,
            passwordSalt: generateSalt
        })
        return res.status(201).json({
            data: {
                message: "user berhasil dibuat!"
            }
        })
    } catch (error) {
        return res.status(404).json({
            data: {
                message: error.message
            }
        })
    }
}
module.exports = UserController