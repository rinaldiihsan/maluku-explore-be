const UserController = {}
const bcrypt = require("bcrypt")
const { User } = require("../models")

/*
    this is auto generate example, you can continue

*/

UserController.index = async(req, res) => {
    res.json({
        message: "Hello UserController"
    })
}

UserController.register = async(req, res) => {
    const { namaLengkap, email, password } = req.body
    const saltRounds = 10; // panjang salt
    const generateSalt = await bcrypt.genSalt(saltRounds); // generat salt
    const hashPassword = await bcrypt.hash(password, generateSalt) // hash salt

    const createUser = await User.create({
        namaLengkap: namaLengkap,
        email: email,
        password: hashPassword,
        passwordSalt: generateSalt
    })
    return res.status(201).json({
        message: "user berhasil dibuat!"
    })
}

module.exports = UserController