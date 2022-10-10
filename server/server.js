require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
    next();
});
require('./routes/sniffle.routes')(app);

app.listen(port, () => console.log(`Port ${port} is ready for ya, sweetums...`))
