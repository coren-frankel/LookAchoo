// require('dotenv').config
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/achoo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // // useCreateIndex: true,
    // // useFindAndModify: false,
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));