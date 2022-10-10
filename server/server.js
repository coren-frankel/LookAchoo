require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: process.env.CLIENT_URL,
    preflightContinue: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}
app.use(cors(corsOptions));
require('./routes/sniffle.routes')(app);
app.listen(port, () => console.log(`Port ${port} is ready for ya, sweetums...`))
