require('dotenv').config
require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const { ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://dbUser:${process.env.MONGO_USER_PASSWORD}@lookachoo.tq99okx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("achoo_db").collection("sniffles");
    console.log('Established a connection to the database')
    console.log(collection)
    // perform actions on the collection object
    client.close();
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