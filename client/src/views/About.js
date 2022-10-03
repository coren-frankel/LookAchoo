import React from 'react'
import Header from '../components/Header';
import { Box } from '@mui/material'
import InfoTabs from '../components/InfoTabs'

const About = () => {
    return (
        <>
            <Header info={true}/>
            <Box sx={{ height: '70vh', bgcolor: '#556f44' }}>
                <InfoTabs/>
            </Box>
        </>
    )
}

export default About