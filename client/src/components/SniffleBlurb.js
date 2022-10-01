import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Paper, Typography, CardMedia, Tooltip } from '@mui/material'
import moment from 'moment';
import grass from '../assets/imgs/grass.png'
import dandelion from '../assets/imgs/dandelion.png'
import ragweed from '../assets/imgs/ragweed.png'
import tree from '../assets/imgs/tree.png'
import smoke from '../assets/imgs/smoke.png'
import corona from '../assets/imgs/corona.png'
import LocName from './LocName';
import getISOCode from './getISOCode';
import CountryName from './CountryName';
import FlagIcon from './FlagIcon';

const imgStyle = {
    width: 'auto',
    height: '2rem',
    padding: '5px',
    margin: 'auto'
}
const SniffleBlurb = (props) => {
    const { sniff } = props;
    const [infection, setInfection] = useState(0)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        let country = sniff.location.country
        let iso = getISOCode(country)
        country = CountryName(iso, country)

        const options = {
            method: 'GET',
            url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${country}/${iso}`,
            headers: {//FREE API NO HIDING OF KEY NECESSARY?...HELPS TO DECIDE TO KEEP COVID ON FRONT END ONLY
                'X-RapidAPI-Key': 'ec2d471e81mshd1d781daa45de8ap15487djsn98d072fb2757',
                'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
        };
        axios.request(options).then((res) => {
            if (!res.data[0]) {
                setLoaded(false)
            } else {
                // console.log(res.data[0])
                setInfection(res.data[0].Infection_Risk)
                setLoaded(true)
            }
        })
            .catch((err) => console.error(err));
    }, [])
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
                bg = { backgroundColor: 'red', color: 'black' }
                break
        }
        return bg
    }
    const sevCovid = (severity) => {
        let bg;
        if (severity == 0) {
            bg = { backgroundColor: 'lightgrey', color: 'black' }
        } else if (severity <= 5) {
            bg = { backgroundColor: 'yellow', color: 'black' }
        } else if (severity <= 20) {
            bg = { backgroundColor: 'gold', color: 'grey' }
        } else if (severity <= 40) {
            bg = { backgroundColor: 'orange', color: 'black' }
        } else if (severity <= 60) {
            bg = { backgroundColor: 'tomato', color: 'white' }
        } else if (severity <= 80) {
            bg = { backgroundColor: 'orangered', color: 'black' }
        } else if (severity <= 100) {
            bg = { backgroundColor: 'red', color: 'black' }
        }
        return bg
    }
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
            default:
                severity = "Unknown"
                break;
        }
        return severity;
    }
    const sniffleName = () => {//Randomized "Title"
        const d = ["A sniffle", "Sneezes", "Itchy nose", "Sniffles", "*achoo*", "Nose tickles", "A Sneezer", '"Sneez-Louise"', "🤧", '"Sniff you were here"']
        const r = Math.floor(Math.random() * d.length)
        return d[r]
    }
    const grassText = `Grass Pollen Index: ${sevCalc(sniff.tickles.grass)}`
    const weedText = `Weed Pollen Index: ${sevCalc(sniff.tickles.weed)}`
    const ragWeedText = `Ragweed Pollen Index: ${sevCalc(sniff.tickles.ragWeed)}`
    const treeText = `Tree Pollen Index: ${sevCalc(sniff.tickles.tree)}`
    const smokeText = `Smoke Index: ${sevCalc(sniff.tickles.smoke)}`
    const covidText = `Covid-19 Infection Risk in ${sniff.location.country}: ${infection}%`
    return (
        <Paper variant="string" sx={{ width: 300, minHeight: 150, maxHeight: 300, margin: '5% auto', padding: '2%', backgroundColor: 'rgb(153, 221, 200,0.7)', borderRadius: 20 }} >
            <Typography variant='button' style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: 'auto'}}>{moment(sniff.createdAt).fromNow()} {sniff.location.iso2 ? <FlagIcon sniff={sniff.location}/> : ""}</Typography>
            <h2 style={{margin: 0}}>{sniffleName()} in {LocName(sniff.location)}</h2>
            <Typography component={'div'} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', width: '66%', margin: 'auto', gap: 2,  }}>
                <Tooltip title={grassText}>
                    <Typography component="div" sx={{ borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 60 }} style={sevColor(sniff.tickles.grass)}>
                        <CardMedia component="img" image={grass} alt='grass icon' style={imgStyle} />
                    </Typography>
                </Tooltip>
                <Tooltip title={weedText}>
                    <Typography component="div" sx={{ borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 60 }} style={sevColor(sniff.tickles.weed)}>
                        <CardMedia component="img" image={dandelion} alt='weed icon' style={imgStyle} />
                    </Typography>
                </Tooltip>
                <Tooltip title={ragWeedText}>
                    <Typography component="div" sx={{ borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 60 }} style={sevColor(sniff.tickles.ragWeed)}>
                        <CardMedia component="img" image={ragweed} alt='ragweed icon' style={imgStyle} />
                    </Typography>
                </Tooltip>
                <Tooltip title={treeText}>
                    <Typography component="div" sx={{ borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 60 }} style={sevColor(sniff.tickles.tree)}>
                        <CardMedia component="img" image={tree} alt='tree icon' style={imgStyle} />
                    </Typography>
                </Tooltip>
                <Tooltip title={smokeText}>
                    <Typography component="div" sx={{ borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 60 }} style={sevColor(sniff.tickles.smoke)}>
                        <CardMedia component="img" image={smoke} alt='smoke icon' style={imgStyle} />
                    </Typography>
                </Tooltip>
                {loaded &&
                    <Tooltip title={covidText}>
                        <Typography component="div" sx={{ borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 60 }} style={sevCovid(infection)}>
                            <CardMedia component="img" image={corona} alt='corona virus icon' style={imgStyle} />
                        </Typography>
                    </Tooltip>
                }
            </Typography>
        </Paper>

    )
}

export default SniffleBlurb