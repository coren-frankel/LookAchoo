import { Typography } from '@mui/material'
import React from 'react'
import InfoLink from './InfoLink'

const Header = (props) => {
    const { info } = props;
    return (
        <>
            <Typography variant={"h2"} sx={{ backgroundColor: '#283f3b', color: '#99ddc8' }} style={{fontFamily: 'Nova Round', display: "flex", justifyContent: 'space-evenly', padding: '0 10px'}}>LookAchoo { info ? "" : <InfoLink/> }</Typography>
        </>
    )
}

export default Header