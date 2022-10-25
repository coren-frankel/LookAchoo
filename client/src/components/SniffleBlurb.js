import React from 'react'
import { Paper, Typography, CardMedia, Tooltip } from '@mui/material'
import moment from 'moment';
import grass from '../assets/imgs/grass.png'
import dandelion from '../assets/imgs/dandelion.png'
import ragweed from '../assets/imgs/ragweed.png'
import tree from '../assets/imgs/tree.png'
import smoke from '../assets/imgs/smoke.png'
import corona from '../assets/imgs/corona.png'
import LocName from './LocName';
import FlagIcon from './FlagIcon';

const imgStyle = {
    width: 'auto',
    height: '2rem',
    padding: '5px',
    margin: 'auto'
}
const SniffleBlurb = (props) => {
    const { sniff } = props;
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
    const sniffleName = () => {//Randomized blurb title--sniffleblurbs!!
        const d = ["A sniffle", "Sneezes", "Itchy nose", "Sniffles", "*achoo*", "Nose tickles", "A Sneezer", '"Sneez-Louise"', "🤧", '"Sniff you were here"']
        const r = Math.floor(Math.random() * d.length)
        return d[r]
    }
    const grassText = `Grass Pollen Index: ${sevCalc(sniff.tickles.grass)}`
    const weedText = `Weed Pollen Index: ${sevCalc(sniff.tickles.weed)}`
    const ragWeedText = `Ragweed Pollen Index: ${sevCalc(sniff.tickles.ragWeed)}`
    const treeText = `Tree Pollen Index: ${sevCalc(sniff.tickles.tree)}`
    const smokeText = `Smoke Index: ${sevCalc(sniff.tickles.smoke)}`
    const covidText = sniff.countryStats ? //IF COVID STATS UNAVAILABLE
            `Covid-19 Infection Risk in ${sniff.location.country}: ${sniff.countryStats.infection}%` : 
            `Covid data currently unavailable for ${sniff.location.country}`//GRACEFUL DISPLAY
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
                <Tooltip title={covidText}>
                    <Typography component="div" sx={{ borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 60 }} style={ !sniff.countryStats ? sevCovid(0) : sevCovid(sniff.countryStats.infection) }>
                        <CardMedia component="img" image={corona} alt='corona virus icon' style={imgStyle} />
                    </Typography>
                </Tooltip>
            </Typography>
        </Paper>

    )
}

export default SniffleBlurb