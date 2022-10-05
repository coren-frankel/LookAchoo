const mongoose = require('mongoose');

const SniffleSchema = new mongoose.Schema({
    location : {
        city : {type: String, required: false},
        region : {type: String, required: false},
        lat : {type: String, required: true},
        lon : {type: String, required: true},
        country : {type: String, required: true},
        localtime : {type: Date, required: false },
        iso2: {type:String, required:false}
    },
    tickles : {
        smoke: {type: Number, required: true},
        tree: {type: Number, required: true},
        grass: {type: Number, required: true},
        weed: {type: Number, required: true},
        ragWeed: {type: Number, required: true}
    },
    conditions: {
        temperature: {type: Number, required: true},
        humidity: {type: Number, required: true},
        weatherCode: {type: Number, required: true},
        precipitation: {
            chance: {type: Number, required: true},
            type: {type: Number, required: true}
        },
        wind: {
            direction: {type: Number, required: true},
            gust: {type: Number, required: true},
            speed: {type: Number, required: true}
        },
    },
    countryStats: {
        infection: {type: Number, required: false},
        activeCases: {type: Number, required: false},
        caseRatio: {type: Number, required: false}
    },
    createdAt: { type: Date, expires: 86400, default: Date.now }
});

module.exports.Sniffle = mongoose.model('Sniffle', SniffleSchema);