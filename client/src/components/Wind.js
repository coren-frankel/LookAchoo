import React from 'react'
import { Card, CardMedia, Typography } from '@mui/material'

import air from '../assets/imgs/air.png'

const Wind = (props) => {
    const { sniffle } = props;
    const compass = (degs) => {
        let direction;
        if (degs >= 337.5 || degs < 22.5) {
            direction = "N"
        } else if (degs >= 22.5 && degs < 67.5) {
            direction = "NE"
        } else if (degs >= 67.5 && degs < 112.5) {
            direction = "E"
        } else if (degs >= 112.5 && degs < 157.5) {
            direction = "SE"
        } else if (degs >= 157.5 && degs < 202.5) {
            direction = "S"
        } else if (degs >= 202.5 && degs < 247.5) {
            direction = "SW"
        } else if (degs >= 247.5 && degs < 292.5) {
            direction = "W"
        } else if (degs >= 292.5 && degs < 337.5) {
            direction = "NW"
        }
        return direction
    }
    return (
        <>
            <Card sx={{ maxWidth: 200, minWidth: 100, margin: '2%', padding: '1%', backgroundColor: 'rgba(200,200,200,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', maxHeight: 220}} elevation={5}>
                <Typography component="div" sx={{ borderRadius: '15px', padding: '1%', margin: '3% 2%', display: 'grid' }}>
                    
                    <CardMedia component="img" image={air} alt='wind icon' sx={{height: 'auto', width: '65%', margin: 'auto'}} />
                    
                    <Typography gutterBottom variant=''>Winds can move seasonal allergens and smoke from great distances</Typography>
                    
                </Typography>
                <Typography component="div" sx={{ borderRadius: '15px', padding: '1%', margin: '3% 2%', backgroundColor: '#BBDEFB' }}>
                    <Typography gutterBottom variant='caption'>Winds: <br/>{sniffle.speed} mph<hr/> {compass(sniffle.direction)}</Typography>
                    <hr/><Typography gutterBottom variant='caption'>Gusts:<br/>{sniffle.gust} mph</Typography>
                </Typography>
            </Card>
        </>
    )
}

export default Wind