// middleware/verifyToken.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { User } = require('../models');

dotenv.config();

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  try {
    if (!token) {
      return res.sendStatus(401);
    }

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user) {
      return res.sendStatus(403);
    }

    req.email = decoded.email;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

module.exports = verifyToken;
