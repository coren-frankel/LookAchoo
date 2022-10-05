import React from 'react'
import corona from '../assets/imgs/corona.png'
import { 
    Card, CardMedia, Typography, 
    Table, TableRow, TableCell, TableBody 
    } from '@mui/material'
import TresCommas from './TresCommas';


const Covid = (props) => {
    const { sniffle } = props;//READY TO RECEIVE COVID OBJECT
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
                    {sniffle.countryStats.infection && 
                    <Table >
                        <TableBody>
                            <TableRow>
                                <TableCell ><Typography variant={"caption"}>Active Cases:</Typography></TableCell>
                                <TableCell ><Typography variant={"caption"}>{TresCommas(sniffle.countryStats.activeCases)}</Typography></TableCell>
                            </TableRow>
                            <TableRow sx={sevColor(sniffle.countryStats.infection)}>
                                <TableCell sx={sevColor(sniffle.countryStats.infection)}><Typography variant={"caption"}>Infection Risk:</Typography></TableCell>
                                <TableCell sx={sevColor(sniffle.countryStats.infection)}><Typography variant={"caption"}>{sniffle.countryStats.infection}%</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography variant={"caption"}>Case Ratio:</Typography></TableCell>
                                <TableCell><Typography variant={"caption"}>1:{TresCommas(sniffle.countryStats.caseRatio)}</Typography></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    }
                {!sniffle.countryStats.infection &&
                    <p>Currently unable to retrieve covid statistics for {sniffle.location.country}...</p>
                }
            </Card>
        </>
    )
}

export default Covid