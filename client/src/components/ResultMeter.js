import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import grass from '../assets/imgs/grass.png'
import dandelion from '../assets/imgs/dandelion.png'
import ragweed from '../assets/imgs/ragweed.png'
import tree from '../assets/imgs/tree.png'
import smoke from '../assets/imgs/smoke.png'
import night3 from '../assets/video/night3.mp4'
import night4 from '../assets/video/night4.mp4'
import night5 from '../assets/video/night5.mp4'
import night6 from '../assets/video/night6.mp4'
import night9 from '../assets/video/night9.mp4'
import night10 from '../assets/video/night10.mp4'
import night12 from '../assets/video/night12.mp4'
import day1 from '../assets/video/falls.mp4'
import day2 from '../assets/video/day2.mp4'
import day3 from '../assets/video/day3.mp4'
import day4 from '../assets/video/day4.mp4'
import day6 from '../assets/video/day6.mp4'
import day7 from '../assets/video/day7.mp4'
import { Typography, Card, CardMedia, Paper } from '@mui/material';
import moment from 'moment'
import Conditions from './Conditions';
import Wind from './Wind'
import Covid from './Covid'
import LocName from './LocName';

const BASE_URL = process.env.REACT_APP_SERVER_URL
    ? `${process.env.REACT_APP_SERVER_URL}/api`
    : 'http://localhost:8000/api';

const imgStyle = {
    width: '15%',
    height: '15%',
    marginRight: '2%'
}
const day = [day1, day2, day3, day4, day6, day7,]
const night = [night3, night4, night5, night6, night9, night10, night12]
const rday = Math.floor(Math.random() * day.length)
const rnight = Math.floor(Math.random() * night.length)
const dayPick = day[rday]
const nightPick = night[rnight]
const ResultMeter = () => {
    const { id } = useParams();
    const [sniffle, setSniffle] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(`${BASE_URL}/sniffle/${id}`)
            .then(res => {
                setSniffle(res.data)
                setLoaded(true)
                // console.log(res.data.location)
            })
            .catch(err => console.log(err))
    }, [])

    const sevCalc = (sevNum) => {
        let severity;//CALCULATE SEVERITY OF ALLERGEN INDEX
        switch (sevNum) {
            case 0:
                severity = "None"
                break;
            case 1:
                severity = "Very Low"
                break;
            case 2:
                severity = "Low"
                break;
            case 3:
                severity = "Medium"
                break;
            case 4:
                severity = "High"
                break;
            case 5:
                severity = "Very High"
                break;
        }
        return severity;
    }
    const sevColor = (sevNum) => {
        let bg;
        switch (sevNum) {
            case 0:
                bg = { backgroundColor: 'lightgrey', color: 'black' }
                break
            case 1:
                bg = { backgroundColor: 'yellow', color: 'black' }
                break
            case 2:
                bg = { backgroundColor: 'gold', color: 'black' }
                break
            case 3:
                bg = { backgroundColor: 'orange', color: 'white' }
                break
            case 4:
                bg = { backgroundColor: 'darkorange', color: 'black' }
                break
            case 5:
                bg = { backgroundColor: 'red', color: 'white' }
                break
        }
        return bg
    }


    return (
        <>
            {loaded &&
                <div>
                    { nightPick && dayPick ?  //LOAD BACKGROUND SOURCE
                    <video playsInline autoPlay muted loop id='myVid' >
                        <source src={6 <= moment().hour() && moment().hour() <= 18 ? dayPick : nightPick} type='video/mp4' />
                    </video> : ""
                    }
                        {/* IF IT'S AFTER 6PM LOCAL TIME, THE VIDEO IS SET TO MATCH DAY/NIGHT */}
                    <Paper elevation={3}>
                        <Typography variant='h6' bgcolor="#95bf74" color={"#283f3b"}>
                            Currently in {LocName(sniffle.location)} 
                        </Typography>
                        <Typography variant='body2' bgcolor="#556f44" color={'#99ddc8'} >
                            At ({sniffle.location.lat}, {sniffle.location.lon}) {moment().format('MMMM Do YYYY, h:mm a')}
                        </Typography>
                    </Paper>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Conditions sniffle={sniffle} />
                        <Card sx={{ minWidth: 190, maxWidth: 200, margin: '2%', padding: '1% 2% 2%', backgroundColor: 'rgba(200,200,200,0.7)' }} elevation={5}>
                            <Typography variant='h6' style={6 <= moment().hour() && moment().hour() <= 18 ? {backgroundColor: "skyblue"} : {backgroundColor: "midnightblue"}} sx={{borderRadius: '10px'}} color={6 <= moment().hour() && moment().hour() <= '18' ? "black" : "white"}>In The Air {6 <= moment().hour() && moment().hour() <= '18' ? "Today" : "Tonight"}:</Typography>
                            <Typography component="div" sx={{ display: 'flex', alignItems: 'center', borderRadius: '25px', margin: '2% 0' }} style={sevColor(sniffle.tickles.grass)}>
                                <CardMedia component="img" image={grass} alt='grass icon' style={imgStyle} />
                                <Typography variant='caption' sx={sevColor(sniffle.tickles.grass)}>Grass Pollen: {sevCalc(sniffle.tickles.grass)}</Typography>

                            </Typography>
                            <Typography component="div" sx={{ display: 'flex', alignItems: 'center', borderRadius: '25px', margin: '2% 0' }} style={sevColor(sniffle.tickles.weed)}>
                                <CardMedia component="img" image={dandelion} alt='weed icon' style={imgStyle} />
                                <Typography variant='caption' sx={sevColor(sniffle.tickles.weed)}>Weed Pollen: {sevCalc(sniffle.tickles.weed)}</Typography>
                            </Typography>
                            <Typography component="div" sx={{ display: 'flex', alignItems: 'center', borderRadius: '25px', margin: '2% 0' }} style={sevColor(sniffle.tickles.ragWeed)}>
                                <CardMedia component="img" image={ragweed} alt='ragweed icon' style={imgStyle} />
                                <Typography variant='caption' sx={sevColor(sniffle.tickles.ragWeed)} style={{display: 'inline-block'}}>Ragweed Pollen: {sevCalc(sniffle.tickles.ragWeed)}</Typography>

                            </Typography>
                            <Typography component="div" sx={{ display: 'flex', alignItems: 'center', borderRadius: '25px', margin: '2% 0' }} style={sevColor(sniffle.tickles.tree)}>
                                <CardMedia component="img" image={tree} alt='tree icon' style={imgStyle} />
                                <Typography variant='caption' sx={sevColor(sniffle.tickles.tree)}>Tree Pollen: {sevCalc(sniffle.tickles.tree)}</Typography>
                            </Typography>
                            <Typography component="div" sx={{ display: 'flex', alignItems: 'center', borderRadius: '25px', margin: '2% 0' }} style={sevColor(sniffle.tickles.smoke)}>
                                <CardMedia component="img" image={smoke} alt='smoke icon' style={imgStyle} />
                                <Typography variant='caption' sx={sevColor(sniffle.tickles.smoke)}>Fire Smoke: {sevCalc(sniffle.tickles.smoke)}</Typography>

                            </Typography>
                        </Card>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* COVID DISPLAY */}
                        <Covid sniffle={sniffle}/>
                        {/* WIND DISPLAY */}
                        <Wind sniffle={sniffle.conditions.wind}/> 
                    </div>
                </div>
            }
            
        </>
    )
}

export default ResultMeter