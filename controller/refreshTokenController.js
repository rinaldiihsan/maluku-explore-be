const { User } = require('../models');
const jwt = require('jsonwebtoken');

const resfreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ error: 'Refresh token not provided' });

    const users = await User.findAll({
      where: {
        refreshToken: refreshToken,
      },
    });

    if (!users[0]) return res.status(403).json({ error: 'Invalid refresh token' });

    jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'Refresh token expired' });
        } else {
          return res.status(403).json({ error: 'Invalid refresh token' });
        }
      }

      const payloadToken = {
        id: users[0].id,
        namaLengkap: users[0].namaLengkap,
        email: users[0].email,
        deskripsi: users[0].deskripsi,
      };

      const accessToken = jwt.sign(payloadToken, process.env.PRIVATE_KEY, {
        algorithm: 'HS256',
        expiresIn: '20s',
      });

      return res.status(200).json({
        accessToken: accessToken,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = resfreshToken;
