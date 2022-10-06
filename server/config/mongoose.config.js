require('dotenv').config
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongoClient = new mongoose.mongo.MongoClient(uri, options);
module.exports =  mongoClient.connect(err => {
    const collection = mongoClient.db("achoo_db").collection("sniffles");
    console.log('Established a connection to the database')
    console.log(collection)
    // perform actions on the collection object
    mongoClient.close();
});

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//     // // useCreateIndex: true,
//     // // useFindAndModify: false,
// })
//     .then(() => console.log('Established a connection to the database'))
//     .catch(err => console.log('Something went wrong when connecting to the database', err));