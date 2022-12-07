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

const BASE_URL = process.env.SERVER_URL
    ? `${process.env.SERVER_URL}/api`
    : 'http://localhost:8000/api';

const vidList = [fern, autumn, wild, breeze, falls, beach, grass]
const random = Math.floor(Math.random() * vidList.length)
const bg = vidList[random]

const Index = () => {
    const navigate = useNavigate();
    const [userIP, setUserIP] = useState("");//HARDCODE IPS HERE FOR TESTING PURPOSES
    const [clicked, setClicked] = useState(false)
    const [sniffles, setSniffles] = useState([])
    const [consent, setConsent] = useState(false)
    useEffect(() => {//RETRIEVE USER IP ADDRESS ON LOAD
        const fetchData = async => {
            try {
                axios.all([//MULTIPLE CALLS AT ONCE! COOL UPGRADE!
                    axios.get('https://api64.ipify.org?format=json'),//IP4 & IP6 IP ADDRESS RETRIEVAL
                    axios.get(`${BASE_URL}/sniffle/random`)
                ]).then(
                    axios.spread((ip4, res) => {
                        setUserIP(ip4.data.ip)//COMMENT OUT FOR TESTING PURPOSES
                        // console.log(ip4.data.ip)
                        setSniffles(res.data)
                        // console.log(res.data)
                    })
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
    const getLocation = () => {
        clicked ? null ://LIMIT OVERCLICKING WHILE PROCESSING REQUEST
            setClicked(true)
        userIP ?
            axios.post(`${BASE_URL}/sniffle/new`, { ip: userIP })
                .then(newSniffle => navigate(`/display/${newSniffle.data._id}`))
                .catch(err => {
                    console.log(err)
                })
            : window.alert("No IP Address, no workee...")
    }
    return (
        <>
                {/* VIDEO BACKGROUND */}
            { bg && 
            <video playsInline autoPlay muted loop id='myVid'>
                <source src={bg} type='video/mp4' />
            </video>
            }
            <Header info={false}/>
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
                    <Typography variant="caption" color={'#99ddc8'}>
                        **sneeze to discover what may be tickling your nose locally**
                    </Typography><br />
                </Paper>
                <br />
                <Button variant="contained" size="large" style={{ margin: "1rem", backgroundColor: '#659b5e', color: '#283f3b',  border: 'solid 2px' }} onClick={getLocation}>{clicked ? <CircularProgress sx={{ color: "#99ddc8" }} /> : "*achoo* **click here** *achoo*"}</Button>
            </Box>
            <Disclaimer userIP={userIP} approved={consent}/>
            <Footer/>
        </>
    )

}

export default Index