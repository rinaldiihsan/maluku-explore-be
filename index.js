const express = require('express');
const dotenv = require('dotenv');
const route = require('./router');
const app = express();
//fungsi cors untuk mengizinkan akses dari front end ke back end
const cors = require('cors');
app.use(cors());

dotenv.config();

app.use(express.json());
app.use(route);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on port ${process.env.APP_URL}:${process.env.APP_PORT}`);
});
