import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Typography, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import fern from '../assets/video/fern.mp4'
import autumn from '../assets/video/autumn.mp4'
import wild from '../assets/video/wild.mp4'
import beach from '../assets/video/beach.mp4'
import grass from '../assets/video/grass.mp4'
import falls from '../assets/video/day1.mp4'
import breeze from '../assets/video/breeze.mp4'
import Header from '../components/Header'
import SniffleBlurb from '../components/SniffleBlurb';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

const BASE_URL = process.env.REACT_APP_SERVER_URL
    ? `${process.env.REACT_APP_SERVER_URL}/api`
    : 'http://localhost:8000/api';

// ASSIGN RANDOM BACKGROUND MP4
const vidList = [fern, autumn, wild, breeze, falls, beach, grass]
const random = Math.floor(Math.random() * vidList.length)
const bg = vidList[random]

const Index = () => {
    const navigate = useNavigate();
    const [userCoords, setUserCoords] = useState("");//HARDCODE COORDS HERE FOR TESTING PURPOSES
    const [clicked, setClicked] = useState(false);
    const [sniffles, setSniffles] = useState([]);
    const getCoords = () => {
        navigator.geolocation ?
            navigator.geolocation.getCurrentPosition(p =>
                // on success
                setUserCoords(`${p.coords.latitude.toFixed(4)},${p.coords.longitude.toFixed(4)}`),
                // on error
                null,
                // Options
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            ) :
            window.alert("Geolocation is not supported on this browser");
    }
    useEffect(() => {//RETRIEVE USER IP ADDRESS ON LOAD
        getCoords()
        const fetchData = async => {
            try {
                axios.get(`${BASE_URL}/sniffle/random`)
                    .then(res => setSniffles(res.data)
                    )

            } catch (err) {
                console.log('Sugar, we\'re goin down swingin')
                const errorResponse = err.response.data.errors;
                for (const key of Object.keys(errorResponse)) {
                    console.log(errorResponse[key].message)
                }
                window.alert('Something went wrong! Refresh the page')
            }
        }
        fetchData(1)
    }, [])
    // IF THE BUTTON IS CLICKED W/O COORDINATES, RELOAD THE PAGE AFTER 5 SECONDS
    useEffect(()=> {
        clicked && !userCoords ? setTimeout(()=> window.location.reload(), 5000) : null
    }, [clicked])
    const getConditions = () => {
        //LIMIT OVERCLICKING WHILE PROCESSING REQUEST
        clicked ? null : setClicked(true)
        userCoords ? axios.post(`${BASE_URL}/sniffle/new`, { coords: userCoords })
            .then(newSniffle => navigate(`/display/${newSniffle.data._id}`))
            .catch(err => console.log(err)) : 
                window.alert("In order for LookAchoo to find you, we'll need your permission!")
    }
    return (
        <>
            {/* VIDEO BACKGROUND */}
            {bg &&
                <video playsInline autoPlay muted loop id='myVid'>
                    <source src={bg} type='video/mp4' />
                </video>
            }
            <Header info={false} />
            <Box sx={{ height: '70vh' }} >
                <Typography bgcolor={"#95bf74"} color={"#283f3b"} sx={{ display: 'inline-block', borderRadius: '20px', p: 1 }}>
                    "Sneezes manifest from many causes and almost always from noses." - Unknown
                </Typography>
                <Carousel stopAutoPlayOnHover="true" animation='slide' duration={1000} height={300}>
                    {
                        sniffles.map((sniff, i) => <SniffleBlurb key={i} sniff={sniff} />)
                    }
                </Carousel>
            </Box>
            <Box sx={{ height: '20vh' }}>
                <Paper elevation={4} sx={{ display: 'inline-block', backgroundColor: "#556f44" }}>
                    {/* <Typography variant="caption" color={'#99ddc8'}>
                        **sneeze to discover what may be tickling your nose locally**
                    </Typography><br /> */}
                </Paper>
                <br />
                <Button
                    variant="contained"
                    size="large"
                    style={{ margin: '1rem', backgroundColor: '#99ddc8', color: '#283f3b', border: 'solid 2px', borderRadius: '50px' }}
                    onClick={getConditions}
                >
                    what's in the air near me?
                    {clicked &&
                        <CircularProgress
                            size={28}
                            sx={{
                                color: "#283f3b",
                                position: 'absolute',
                                bottom: '20%',
                                right: '45%'
                            }}
                        />
                    }
                </Button>
            </Box>
            <Disclaimer userCoords={userCoords} />
            <Footer />
        </>
    )

}

export default Index