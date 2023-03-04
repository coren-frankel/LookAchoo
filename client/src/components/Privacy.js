import { Card, Typography } from '@mui/material'
import React from 'react'

const Privacy = () => {
    return (
        <>
            <em>
            LookAchoo was built to expediently provide insight into what real-time local conditions could be responsible for nasal irritation.
            </em><br/><br/>
            <Typography component={'div'} align="left">
            <span style={{ fontWeight: 700 }}>Starting with your public IP address</span><br />
            LookAchoo starts by requesting your IP address from <a href="https://www.ipify.org/">ipify</a>. This is a free and harmless request similar to when you search Google for "my IP address".
            In it's current form, this application uses that IP address as the only search paramater needed from you, the user, as the rest of LookAchoo's 'sniffle statistics' are gathered from there.
            <br/>
            <Card sx={{ bgcolor: '#283f3b', color: '#99ddc8', m: 3}} align="center">
            <Typography display="block" gutterBottom>LookAchoo's Pledge to Privacy:</Typography>
            There is <span style={{fontWeight: '900', textDecoration: 'underline'}}>no</span> collection nor recording of IP addresses at any point--they are used and immediately discarded--shown to you and no one else--and all subsequently saved data attained from it is inpersonal and cannot be used to identify your web activity.
            </Card>
            <span style={{ fontWeight: 700 }}>Who retrieves what?</span><br />
            Once lattitude, longitude, and any other location data attained by IP Geolocation with the <a href="https://www.weatherapi.com">WeatherAPI.com IP locator API</a> are not stored in conjunction with IP addresses and are therefore avoiding the potential creation of risk for providing Personal Identifying Information for malicious parties to exploit.
            Instead, the IP locator returns useful area identifiers like city, region, and country.<br/><br/>
            The fine point of the locator gives coordinates, which are utilized to ask <a href="https://www.tomorrow.io/">Tomorrow.io</a> API for real-time weather conditions and air quality, however those coordinates are not locating your position as much as they are locating where your Internet Service Provider locates your modem. 
            If you are on a mobile network, there is a greater likelihood of inaccuracy, as the connection is held over a greater distance than a wifi router tends to be.<br/><br/>
            In turn, to retrieve Covid infection risk from the <a href="https://vaccovid.live/">VACCOVID</a> API, LookAchoo pivots on the country returned to guarantee consistency of results on a more global scale--being that city and state values are inconsistent when retrieving IP Geolocation. 
            VACCOVID calculates infection risk as the "Total number of covid-19 cases divided by Total Population since the beginning of the outbreak." 
            <br/>
            </Typography>
            
        </>
    )
}

export default Privacy