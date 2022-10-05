require('dotenv').config
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 8000;
require('../server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require('../server/routes/sniffle.routes')(app);
//EXPRESS VERCEL SERVERLESS CONNECTION TO CLIENT
app.use('/routes/sniffle.route', sniffle.route);

app.use('/routes', require(path.join(__dirname, './routes/sniffle.route.js')));

app.use(express.static(path.join(__dirname, "../client/build")));
app.get('*', function (_, res) {
    res.sendFile(
        path.join(__dirname, '../client/build/index.html'),
        (err) => {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

//SOCKET.io SERVERSIDE FOUNDATION 
// const  server = 
app.listen(port, () => console.log(`Port ${port} is ready for ya, hon...`))
// const io = require('socket.io')(server, {cors: true});
// io.on("connection", socket => {
//     console.log(socket.id)
//     socket.on("event_from_client", data => {
//         socket.broadcast.emit("send_data_to_all_other_clients", data);
//     });
// });
module.exports = app;