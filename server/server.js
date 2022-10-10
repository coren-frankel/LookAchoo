const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const whitelist = ['https://look-achoo.vercel.app/']
const corsOptions = {
    origin: function( origin, callback ) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("CORS isn't having it!"))
        }
    }
}
app.use(cors(corsOptions));
require('./routes/sniffle.routes')(app);

app.listen(port, () => console.log(`Port ${port} is ready for ya, sweetums...`))
