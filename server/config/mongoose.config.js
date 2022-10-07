require('dotenv').config()
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    retryWrites: true,
    w: 'majority',
    authMechanism: 'DEFAULT'
}


const dbConnection = () => mongoose.connect(uri, options)
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));
const closeConnection = () => mongoose.connection.close()
module.exports = { dbConnection, closeConnection }