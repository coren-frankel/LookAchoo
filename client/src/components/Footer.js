import { Typography, Card } from '@mui/material'
import React from 'react'

const Footer = () => {
    const style = {
        links: {
            textDecoration: 'none', 
            color: '#99ddc8'
        }
    }
    return (
        <>
        <Card elevation={3} sx={{ bgcolor: '#283f3b', color: '#99ddc8', display: 'inline-block', position: 'sticky', bottom: 0, padding: '0 10px'}}>
            <small style={{}}>
                <a href="https://github.com/coren-frankel" rel="Coren Frankel's github" style={style.links}>coren frankel</a> 2022<br/>
                Imagery from <a href="https://icons8.com" style={style.links}>icons8.com</a> | Video from <a href="https://www.pexels.com/" style={style.links}>pexels.com</a>
            </small>
            
        </Card>
        </>
    )
}

export default Footer