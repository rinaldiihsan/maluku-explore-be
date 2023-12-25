const express = require('express');
const dotenv = require('dotenv');
const route = require('./router');
const cookieParser = require('cookie-parser');

const app = express();

const cors = require('cors');
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(route);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on port ${process.env.APP_URL}:${process.env.APP_PORT}`);
});
