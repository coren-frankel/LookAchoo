require('dotenv').config();//ENV IMPORT
const axios = require('axios');
const { Sniffle } = require('../models/sniffle.model');
const { getISOCode, countryName } = require('../modules/countryISO');

module.exports.index = (req, res) => {//TESTING
    res.json({ message: "Hello there!" })
}
module.exports.logNewSniffle = (req, res) => {
    console.log("logNewSniffle enganged...")
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
        params: { q: req.body.ip },
        headers: {
            'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };//RETRIEVE LOCATION DATA FROM IP ADDRESS
    axios.request(options).then(resp => {
        console.log(resp.data)
        const { lat, lon, region, city, country_name, localtime, country_code } = resp.data;
        // console.log(`Lattitude: ${lat} Longitude: ${lon}`)
        const fetchData = async => {
            try {//TOMORROW PARAMS & SETTINGS
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
                        'content-type': 'application/json',
                        'apikey': process.env.TOMORROW_API_KEY
                    }
                }
                //VACCOVID PARAMS & SETTINGS & SUPPLEMENTAL CONVERSION FUNCTIONS
                let iso = getISOCode(country_name)
                let country = countryName(iso, country_name)
                const optis = {
                    method: 'GET',
                    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${country}/${iso}`,
                    headers: {//FREE API NO HIDING OF KEY NECESSARY?...HELPS TO DECIDE TO KEEP COVID ON FRONT END ONLY
                        'X-RapidAPI-Key': process.env.VACCOVID_API_KEY,
                        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
                    }
                };
                axios.all([
                    axios.get(`https://api.tomorrow.io/v4/timelines?location=${location}&fields=${fields}&units=${units}`, opts),
                    axios.request(optis)
                ]).then(
                    axios.spread((resp1, resp2) => {
                        //WEATHER CONDITIONS
                        const cond = resp1.data.data.timelines[0].intervals[0].values//WEATHER CONDITIONS
                        console.log(resp1.data.data.timelines[0].intervals[0].values)
                        //COVID STATISTICS
                        const inf = resp2.data[0]
                        console.log(resp2.data[0])
                        Sniffle.create({
                            location: {
                                city: city,
                                region: region,
                                lat: lat,
                                lon: lon,
                                country: country_name,
                                iso2: country_code,
                                localtime: localtime
                            },
                            tickles: {
                                smoke: cond.wildfireSmokeIndex,
                                tree: cond.treeIndex,
                                grass: cond.grassIndex,
                                weed: cond.weedIndex,
                                ragWeed: cond.weedRagweedIndex
                            },
                            conditions: {
                                temperature: cond.temperature,
                                humidity: cond.humidity,
                                weatherCode: cond.weatherCode,
                                precipitation: {
                                    chance: cond.precipitationProbability,
                                    type: cond.precipitationType
                                },
                                wind: {
                                    direction: cond.windDirection,
                                    gust: cond.windGust,
                                    speed: cond.windSpeed
                                }
                            },
                            countryStats: {
                                infection: inf.Infection_Risk,
                                activeCases: inf.ActiveCases,
                                caseRatio: inf.one_Caseevery_X_ppl
                            }
                        }).then(sniffle => res.json(sniffle))
                            .catch(err => res.status(400).json(err))
                    })
                )
            } catch (err) {
                console.log(err)
                console.log('Error in Tomorrow or VACCOVID request')
            }
        }
        fetchData(1)
    }).catch(err => {
        console.error(err)
        console.log("Weather API failed to locate IP Address")
    });
}
module.exports.getSniffle = (req, res) => {
    Sniffle.findOne({ _id: req.params.id })
        .then(sniffle => res.json(sniffle))
        .catch(err => res.json(err));
}
module.exports.getRandom = (req, res) => {
    Sniffle.aggregate([{ $sample: { size: 10 } }])
        .then(sniffles => res.json(sniffles))
        .catch(err => res.json(err));
}