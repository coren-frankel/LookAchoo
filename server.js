// if(process.env.NODE_ENV !== 'production') {
//     require('dotenv').config({path: __dirname+'/.env'});
// }

// require('dotenv').config
const express = require('express');
const app = express();
// const mongoose = require('mongoose')
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 8000;
require('./server/config/mongoose.config');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/api', (req, res) => {
    res.send("testing...")
})
// app.use('/api', require('../server/routes/sniffle.routes'));
//EXPRESS VERCEL SERVERLESS CONNECTION TO CLIENT


//SOCKET.io SERVERSIDE FOUNDATION 
// const  server = 
app.listen(port, () => console.log(`Port ${port} is ready for ya, sweetums...`))

//ROUTES TO CONNECT FRONTEND & BACKEND
// app.use('/api/hello', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))
// app.use('/api/sniffle/new', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))
// app.use('/api/sniffle/random', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))
// app.use('/api/sniffle/:id', require(path.join(__dirname, 'routes', 'sniffle.routes.js')))

//STATIC FILES (FRONTEND BUILD)
// if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('*', (_, res) => {
        res.sendFile(
            path.join(__dirname, './client/build/index.html'));
            (err) => { if(err) { res.status(500).send(err)}}
    })
// }


// const io = require('socket.io')(server, {cors: true});
// io.on("connection", socket => {
//     console.log(socket.id)
//     socket.on("event_from_client", data => {
//         socket.broadcast.emit("send_data_to_all_other_clients", data);
//     });
// });
module.exports = app