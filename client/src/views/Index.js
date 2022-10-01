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
import pollen from '../assets/video/pollen.mp4'
import Header from '../components/Header'
import SniffleBlurb from '../components/SniffleBlurb';

const vidList = [fern, autumn, wild, pollen, breeze, falls, beach, grass]
const random = Math.floor(Math.random() * vidList.length)
const bg = vidList[random]


const Index = () => {
    const navigate = useNavigate();
    const [userIP, setUserIP] = useState("");//HARDCODE IPS HERE FOR TESTING PURPOSES
    const [clicked, setClicked] = useState(false)
    const [sniffles, setSniffles] = useState([])
    useEffect(() => {//RETRIEVE USER IP ADDRESS ON LOAD
        const fetchData = async => {
            try {
                axios.all([
                    axios.get('https://api.ipify.org?format=json'),
                    axios.get('http://localhost:8000/api/sniffle/random')
                ]).then(
                    axios.spread((ip4, res) => {
                        setUserIP(ip4.data.ip)//COMMENTED OUT FOR TESTING PURPOSES
                        // console.log(ip4.data.ip)
                        setSniffles(res.data)
                    })
                )
            } catch (err) {
                console.log('Sugar, we\'re goin down swingin')
                const errorResponse = err.response.data.errors;
                for (const key of Object.keys(errorResponse)) {
                    console.log(errorResponse[key].message)
                }
            }
        }
        fetchData(1)
    }, [])
    const getLocation = () => {
        clicked ? null : 
        setClicked(true)
        userIP ?
            axios.post('http://localhost:8000/api/sniffle/new', {ip :userIP})
                .then(newSniffle => navigate(`/${newSniffle.data._id}`))
                .catch(err => {
                    const errorResponse = err.response.data.errors;
                    for (const key of Object.keys(errorResponse)) {
                        console.log(errorResponse[key].message)
                    }
                    window.alert("Ahh! Ya lost it!\nLookAchoo wasn't able to get location data\nbased on the IP Address you are using\nUsing a VPN will skew location results")
                }) 
            : window.alert("No IP Address, no workee...")
    }
    return (
        <>
            <video playsInline autoPlay muted loop id='myVid'>
                <source src={bg} type='video/mp4' />
            </video>
            <Header />
            <Box sx={{ height: '70vh' }} >
                <Typography variant="h6" bgcolor={"#95bf74"} color={"#283f3b"} style={{margin: '0'}}>
                    {userIP ? `Your IP address has been logged as: ${userIP}` : "Fetching IP Address..."}
                </Typography>
                <Carousel stopAutoPlayOnHover="true" animation='slide' duration={1000} height={350}>
                {
                    sniffles.map( (sniff, i) => <SniffleBlurb key={i} sniff={sniff}/> )
                }
                </Carousel>
            </Box>
            
            <Box sx={{ height: '10vh' }}>
                <Button variant="contained" size="medium" style={{ margin: "1rem", backgroundColor: '#659b5e' }} onClick={getLocation}>{ clicked ? <CircularProgress sx={{height: '1rem', color: "grey.500"}}/> : "*achoo*"}</Button>
                <br/>
                <Paper elevation={4}  sx={{display: 'inline-block', backgroundColor: "#556f44"}}>
                <Typography variant="caption" color={'#99ddc8'}>
                    **sneeze to discover what may be tickling your nose locally**
                </Typography><br />
                </Paper>
            </Box>
        </>
    )
    
}

export default Index