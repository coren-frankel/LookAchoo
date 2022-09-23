require('dotenv').config();//API KEY CALL??
const axios = require('axios');
const { Sniffle } = require('../models/sniffle.model');
module.exports.index = (req, res) => {
    res.json({message: "Hello there!"})
}
module.exports.logNewSniffle = (req, res) => {
    console.log(req.body.ip)
    console.log("logNewSniffle enganged...")
    if(!req.body.ip){//FAIL IF USERIP NOT PROVIDED/WAS BLOCKED?
        console.log("IP address not logged")
    }
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
        params: { q: req.body.ip},
        headers: {
            'X-RapidAPI-Key': process.env.WEATHER_API_KEY,//process.env
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };//RETRIEVE LOCATION DATA FROM IP ADDRESS
    axios.request(options).then(resp => {
        const {lat , lon, region, city, country_name } = resp.data;
        console.log(`Lattitude: ${lat} Longitude: ${lon}`)
        let fields = [
            "grassGrassIndex", "grassIndex", "humidity", 
            "precipitationType", "precipitationProbability", 
            "temperature", "treeIndex", "weatherCode", 
            "weedRagweedIndex", "weedIndex", "windDirection", 
            "windGust", "windSpeed", "wildfireSmokeIndex", "weatherCode"
        ];
        let location = [lat, lon];
        let units = "imperial"
        const opts = {
            headers: {
                'content-type' : 'application/json',
                'apikey' : process.env.TOMORROW_API_KEY
            }
        }
        axios.get(`https://api.tomorrow.io/v4/timelines?location=${location}&fields=${fields}&units=${units}`, opts)
            .then(respo => {
                console.log(respo.data.data.timelines[0].intervals[0].values)
                const cond = respo.data.data.timelines[0].intervals[0].values
                Sniffle.create({
                    location : {
                        city: city,
                        region: region,
                        lat: lat,
                        lon: lon,
                        country: country_name
                    },
                    tickles : {
                        smoke: cond.wildfireSmokeIndex,
                        tree: cond.treeIndex,
                        grass: cond.grassIndex,
                        weed: cond.weedIndex,
                        ragWeed: cond.weedRagweedIndex
                    },
                    conditions : {
                        temperature: cond.temperature,
                        humidity: cond.humidity,
                        weatherCode: cond.weatherCode,
                        precipitation: {
                            chance: cond.precipitationProbability,
                            type: cond.precipitationType
                        },
                        wind : {
                            direction: cond.windDirection,
                            gust: cond.windGust,
                            speed: cond.windSpeed
                        }
                    }
                }).then(sniffle => res.json(sniffle))
                .catch(err => res.status(400).json(err))
            })
            .catch(err => {
                console.log(err)
                console.log('Error in Tomorrow Request')
            })
    }).catch(err => {
        console.error(err)
        console.log("Weather API failed to locate IP Adress")
    });
}
module.exports.getSniffle = (req, res) => {
    Sniffle.findOne({ _id: req.params.id })
        .then(sniffle => res.json(sniffle))
        .catch(err => res.json(err));
}
module.exports.getRandom = (req, res) => {
    Sniffle.aggregate([{$sample: { size: 5 } }])
        .then(sniffles => res.json(sniffles))
        .catch(err => res.json(err));
}