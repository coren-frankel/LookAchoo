const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const port = 8000;
require('./config/mongoose.config');
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require('./routes/sniffle.routes');
// app.use('/api', routes);

app.listen(port, () => console.log(`Port ${port} is ready for ya, sweetums...`))
