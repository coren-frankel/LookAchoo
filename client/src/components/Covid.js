import React, { useEffect, useState } from 'react'
import corona from '../assets/imgs/corona.png'
import axios from 'axios';
import { Card, CardMedia, Typography, Table, TableRow, TableCell, TableBody } from '@mui/material'
import getISOCode from './getISOCode';
import TresCommas from './TresCommas';
import CountryName from './CountryName';


const Covid = (props) => {
    const { sniffle } = props;//READY TO RECEIVE COVID OBJECT
    const [countryStats, setCountryStats] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        let country = sniffle.location.country
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
            if(!res.data[0]){
                console.log(`Consider Adjusting Country Name: ${country}`)
            }
            setCountryStats(res.data[0])
            setLoaded(true)
        })
            .catch((err) => console.error(err));
    }, [])
    const sevColor = (severity) => {
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
    return (
        <>
            <Card sx={{ minWidth: 200, maxWidth: 240, margin: '2%', backgroundColor: 'rgba(200,200,200,0.7)' }} elevation={5}>
                <Typography component={'div'} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <CardMedia component="img" image={corona} alt='corona virus icon' style={{ width: '30%' }} />
                    <Typography component={'div'}>
                        <Typography variant='subtitle2'>{sniffle.location.country}</Typography>
                        <Typography variant='caption'>Covid Stats:</Typography>
                    </Typography>
                </Typography><hr/>
                    {countryStats && loaded ?
                    <Table >
                        <TableBody>
                            <TableRow>
                                <TableCell ><Typography variant={"caption"}>Active Cases:</Typography></TableCell>
                                <TableCell ><Typography variant={"caption"}>{TresCommas(countryStats.ActiveCases)}</Typography></TableCell>
                            </TableRow>
                            <TableRow sx={sevColor(countryStats.Infection_Risk)}>
                                <TableCell sx={sevColor(countryStats.Infection_Risk)}><Typography variant={"caption"}>Infection Risk:</Typography></TableCell>
                                <TableCell sx={sevColor(countryStats.Infection_Risk)}><Typography variant={"caption"}>{countryStats.Infection_Risk}%</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography variant={"caption"}>Case Ratio:</Typography></TableCell>
                                <TableCell><Typography variant={"caption"}>1:{TresCommas(countryStats.one_Caseevery_X_ppl)}</Typography></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                        :
                        ""
                    }
                {countryStats && loaded ?
                    "" : <p>Unable to retrieve covid statistics for {sniffle.location.country} right now
                    </p>
                }
            </Card>
        </>
    )
}

export default Covid