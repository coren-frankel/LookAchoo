const SniffleController = require('../controllers/sniffle.controller');
module.exports = function(app){
    app.get('/api/hello', SniffleController.index)
    app.post('/api/sniffle/new', SniffleController.logNewSniffle);
    app.get('/api/sniffle/:id', SniffleController.getSniffle)
    //FETCH RANDOM SNIFFLES
    // app.get('/api/sniffle/random', SniffleController.displaySomeSniffles)
}