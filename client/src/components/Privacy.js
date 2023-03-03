import { Card, Typography } from '@mui/material'
import React from 'react'

const Privacy = () => {
    return (
        <>
            <p><em>
                LookAchoo was built to expediently provide insight into what real-time local conditions could be responsible for nasal irritation.
            </em></p>
            <Typography component={'p'} align="left">
            <Typography variant="h6" style={{fontWeight:600}}>Starting with your location</Typography>
                LookAchoo initiates by requesting permission from your browser to access your location.
                The application currently utilizes only your coordinates as the search parameter,
                while the remainder of LookAchoo's 'sniffle statistics' are obtained solely from these two numerical values.
            </Typography>
            <Card sx={{ bgcolor: '#283f3b', color: '#99ddc8', m: 2, p: 1 }} align="center">
                <Typography display="block" gutterBottom sx={{ fontWeight: 900, textDecoration: 'underline' }}>LookAchoo's Pledge to Privacy:</Typography>
                Your location information is strictly used to get local condition, allergen, & viral data
                and all subsequently saved data attained is inpersonal and cannot be used to identify your web activity.
                LookAchoo does <span style={{ fontWeight: '900', textDecoration: 'underline' }}>not</span> sell or analyze
                location data, and all shared displays of previous location searches are intentionally imprecise and purged regularly.
            </Card>
            <Typography component={'div'} align="left">
                <Typography variant="h6" style={{fontWeight:600}}>Who retrieves what?</Typography>
                <p>Once lattitude & longitude are attained through Geolocation,
                    the <a href="https://www.weatherapi.com">WeatherAPI.com Realtime Weather API</a> identifies
                    and returns useful area identifiers: city, region, country, and local time.
                </p>
                <p>It is worth noting that we currently do not utilize the returned weather conditions from weatherapi.com.
                    Instead, LookAchoo makes a request to <a href="https://www.tomorrow.io/">Tomorrow.io</a> API
                    for real-time weather conditions and benefits from additional data like air quality.
                </p>
                <p>In turn, to retrieve Covid infection risk from the <a href="https://vaccovid.live/">VACCOVID</a> API,
                    LookAchoo currently searches by country to maintain consistency of results on the global scale.
                    VACCOVID calculates infection risk as the "Total number of covid-19 cases divided by Total Population since the beginning of the outbreak."
                    This is not the ideal way to present something like "infection risk", and LookAchoo will aim to alter
                    the covide reporting in time.
                </p>
            </Typography>

        </>
    )
}

export default Privacy