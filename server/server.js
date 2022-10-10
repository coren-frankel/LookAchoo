require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const whitelist = [process.env.CLIENT_URL, "http://localhost:3000"];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin))
            return callback(null, true)
        callback(new Error('Not allowed by CORS'));
    }
}
app.use(cors(corsOptions));
require('./routes/sniffle.routes')(app);

app.listen(port, () => console.log(`Port ${port} is ready for ya, sweetums...`))
