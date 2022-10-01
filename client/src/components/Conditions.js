import React from 'react'
import { CardMedia, Card, Typography } from '@mui/material'
import sun from '../assets/imgs/sun.png'
import heavysnow from '../assets/imgs/heavysnow.png'
import cloudy from '../assets/imgs/cloudy.png'
import partlycloudy from '../assets/imgs/partlycloudy.png'
import flurries from '../assets/imgs/flurries.png'
import mostlycloudy from '../assets/imgs/mostlycloudy.png'
import drizzle from '../assets/imgs/drizzle.png'
import ice from '../assets/imgs/ice.png'
import lightfreezingrain from '../assets/imgs/lightfreezingrain.png'
import icepellets from '../assets/imgs/icepellets.png'
import heavyrain from '../assets/imgs/heavyrain.png'
import fog from '../assets/imgs/fog.png'
import unknown from '../assets/imgs/unknown.png'
import lightsnow from '../assets/imgs/lightsnow.png'
import snow from '../assets/imgs/snow.png'
import freezingdrizzle from '../assets/imgs/freezingdrizzle.png'
import thunderstorm from '../assets/imgs/thunderstorm.png'
import lightrain from '../assets/imgs/lightrain.png'
import freezingrain from '../assets/imgs/freezingrain.png'
import nightfreezingrain from '../assets/imgs/nightfreezingrain.png'
import nightdrizzle from '../assets/imgs/nightdrizzle.png'
import nightfog from '../assets/imgs/nightfog.png'
import nightflurries from '../assets/imgs/nightflurries.png'
import nightclear from '../assets/imgs/nightclear.png'
import nightpartlycloudy from '../assets/imgs/nightpartlycloudy.png'
import nightmostlycloudy from '../assets/imgs/nightmostlycloudy.png'
import nightlightrain from '../assets/imgs/nightlightrain.png'
import nightlightsnow from '../assets/imgs/nightlightsnow.png'
import moment from 'moment';


const Conditions = (props) => {
    const { sniffle } = props;
    const precip = (precipCode) => {
        let result;//CALCULATE SEVERITY OF ALLERGEN INDEX
        switch (precipCode) {
            case 0:
                result = "Precipitation"
                break;//DE FACTO PHRASE
            case 1:
                result = "Rain"
                break;
            case 2:
                result = "Snow"
                break;
            case 3:
                result = "Freezing Rain"
                break;
            case 4:
                result = "Ice Pellets"
                break;
        }
        return result;
    }
    const condition = (code) => {
        let desc = code
        switch (code) {
            case 0:
                desc = "Unknown";
                break
            case 1000:
                desc = "Clear"
                break;
            case 1100:
                desc = "Mostly Clear"
                break;
            case 1101:
                desc = "Partly Cloudy"
                break;
            case 1102:
                desc = "Mostly Cloudy"
                break;
            case 1001:
                desc = "Cloudy"
                break;
            case 2000:
                desc = "Fog"
                break;
            case 2100:
                desc = "Light Fog"
                break;
            case 4000:
                desc = "Drizzle"
                break;
            case 4001:
                desc = "Rain"
                break;
            case 4200:
                desc = "Light Rain"
                break;
            case 4201:
                desc = "Heavy Rain"
                break;
            case 5000:
                desc = "Snow"
                break;
            case 5001:
                desc = "Flurries"
                break;
            case 5100:
                desc = "Light Snow"
                break;
            case 5101:
                desc = "Heavy Snow"
                break;
            case 6000:
                desc = "Freezing Drizzle"
                break;
            case 6001:
                desc = "Freezing Rain"
                break;
            case 6200:
                desc = "Light Freezing Rain"
                break;
            case 6201:
                desc = "Heavy Freezing Rain"
                break;
            case 7000:
                desc = "Ice Pellets"
                break;
            case 7101:
                desc = "Heavy Ice Pellets"
                break;
            case 7102:
                desc = "Light Ice Pellets"
                break;
            case 8000:
                desc = "Thunderstorm"
        }
        return desc
    }
    const condImg = (sniffle) => {
        let img;
        let code = sniffle.conditions.weatherCode
        let nowHour = moment(sniffle.location.localtime).hour()
        if(nowHour >= 6 && nowHour <= 18) {
            switch(code){
                case 0:
                    img = unknown;
                    break
                case 1000:
                    img = sun
                    break;
                case 1100:
                    img = partlycloudy
                    break;
                case 1101:
                    img = partlycloudy
                    break;
                case 1102:
                    img = mostlycloudy
                    break;
                case 1001:
                    img = cloudy
                    break;
                case 2000:
                    img = fog
                    break;
                case 2100:
                    img = fog
                    break;
                case 4000:
                    img = drizzle
                    break;
                case 4001:
                    img = heavyrain
                    break;
                case 4200:
                    img = lightrain
                    break;
                case 4201:
                    img = heavyrain
                    break;
                case 5000:
                    img = snow
                    break;
                case 5001:
                    img = flurries
                    break;
                case 5100:
                    img = lightsnow
                    break;
                case 5101:
                    img = heavysnow
                    break;
                case 6000:
                    img = freezingdrizzle
                    break;
                case 6001:
                    img = freezingrain
                    break;
                case 6200:
                    img = lightfreezingrain
                    break;
                case 6201:
                    img = ice
                    break;
                case 7000:
                    img = icepellets
                    break;
                case 7101:
                    img = icepellets
                    break;
                case 7102:
                    img = ice
                    break;
                case 8000:
                    img = thunderstorm
            }
        } else {//NIGHT ALTERNATIVES ADDED
            switch (code) {
                case 0:
                    img = unknown;
                    break
                case 1000:
                    img = nightclear
                    break;
                case 1100:
                    img = nightpartlycloudy
                    break;
                case 1101:
                    img = nightpartlycloudy
                    break;
                case 1102:
                    img = nightmostlycloudy
                    break;
                case 1001:
                    img = cloudy
                    break;
                case 2000:
                    img = nightfog
                    break;
                case 2100:
                    img = nightfog
                    break;
                case 4000:
                    img = nightdrizzle
                    break;
                case 4001:
                    img = heavyrain
                    break;
                case 4200:
                    img = nightlightrain
                    break;
                case 4201:
                    img = heavyrain
                    break;
                case 5000:
                    img = snow
                    break;
                case 5001:
                    img = nightflurries
                    break;
                case 5100:
                    img = nightlightsnow
                    break;
                case 5101:
                    img = heavysnow
                    break;
                case 6000:
                    img = freezingdrizzle
                    break;
                case 6001:
                    img = nightfreezingrain
                    break;
                case 6200:
                    img = lightfreezingrain
                    break;
                case 6201:
                    img = ice
                    break;
                case 7000:
                    img = icepellets
                    break;
                case 7101:
                    img = icepellets
                    break;
                case 7102:
                    img = ice
                    break;
                case 8000:
                    img = thunderstorm
            }
        }
        return img
    }
    return (
        <Card sx={{ maxWidth: 240, minWidth: 130, margin: '2%', padding: '1% 2%', backgroundColor: 'rgba(200,200,200,0.7)' }} elevation={5}>
            <CardMedia component="img" image={condImg(sniffle)} alt='sun icon' size={100} />
            <Typography component="div" sx={{ backgroundColor: 'silver', borderRadius: '15px', padding: '1%' }}>
                <Typography gutterBottom variant='subtitle2'>{sniffle.conditions.temperature.toFixed()}°F {condition(sniffle.conditions.weatherCode)}</Typography>
                <Typography gutterBottom variant='subtitle2'>{sniffle.conditions.humidity}% Humidity</Typography>
                {sniffle.conditions.precipitation.chance > 0 ?
                    <Typography gutterBottom variant='caption'>{sniffle.conditions.precipitation.chance}% Chance of {precip(sniffle.conditions.precipitation.type)}</Typography>
                    : ""}
            </Typography>
        </Card>
    )
}

export default Conditions