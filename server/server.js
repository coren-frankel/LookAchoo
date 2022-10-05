if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
}

// require('dotenv').config
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path');
const app = express();
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.port || 8000;

require('../server/routes/sniffle.routes')(app);
//EXPRESS VERCEL SERVERLESS CONNECTION TO CLIENT


//SOCKET.io SERVERSIDE FOUNDATION 
// const  server = 
app.listen(port, () => console.log(`Port ${port} is ready for ya, hon...`))

//ROUTES TO CONNECT FRONTEND & BACKEND
app.use('/api/(.*)', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))
// app.use('/api/sniffle/new', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))
// app.use('/api/sniffle/random', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))
// app.use('/api/sniffle/:id', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))

//STATIC FILES (FRONTEND BUILD)
if (process.env.NODE_ENV === 'production') {
    // app.use(express.static(path.join(__dirname, '../client', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    })
}


// const io = require('socket.io')(server, {cors: true});
// io.on("connection", socket => {
//     console.log(socket.id)
//     socket.on("event_from_client", data => {
//         socket.broadcast.emit("send_data_to_all_other_clients", data);
//     });
// });