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


// const mongoClient = new mongoose.mongo.MongoClient(uri, options);
// mongoClient.connect(err => {
//     // const collection = mongoClient.db("achoo_db").collection("sniffles");
//     console.log('Established a connection to the database')
    
//     // perform actions on the collection object
//     mongoClient.close();
// })

mongoose.connect(uri, options)
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));

mongoose.connection.close()