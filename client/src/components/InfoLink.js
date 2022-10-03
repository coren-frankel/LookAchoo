import React from 'react'
import { useNavigate } from 'react-router-dom';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { IconButton } from '@mui/material'

const InfoLink = () => {
    const navigate = useNavigate();
    return (
        <IconButton onClick={()=>navigate('/about')} ><InfoTwoToneIcon fontSize='large' sx={{color: '#99ddc8'}}/></IconButton>
    )
}

export default InfoLink