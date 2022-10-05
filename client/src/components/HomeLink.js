import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material'

const HomeLink = () => {
    const navigate = useNavigate();
    return (
        <IconButton onClick={()=>navigate('/')} ><HomeRoundedIcon fontSize='large' sx={{color: '#99ddc8'}}/></IconButton>
    )
}

export default HomeLink