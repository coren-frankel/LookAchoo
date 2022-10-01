import React from 'react'
import { CardMedia } from '@mui/material'

const FlagIcon = (props) => {
    const {sniff} = props;
    const iso_2 = sniff.iso2.toLowerCase()//COUNTRY CODE FORMAT FOR CDN CALL
    const link = `https://flagcdn.com/20x15/${iso_2}.png`
    return (
        <CardMedia component="img"
        image={link}
        sx={{ width:20, height: 15}}
        alt={sniff.country}/>
    )
}

export default FlagIcon