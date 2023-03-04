import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Dialog, DialogActions, DialogTitle, 
    DialogContent, DialogContentText,
    Slide, Button, Typography
} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Disclaimer = (props) => {
    const { userIP } = props;
    const [accepted, setAccepted] = useState(false);
    const [open, setOpen] = useState(!accepted ? true : false)
    const navigate = useNavigate();
    useEffect(() => {
        if (window.sessionStorage.getItem('cookies')) {
            setAccepted(true);
            setOpen(false);
        }
    }, []);
    function acceptPolicy() {
        sessionStorage.setItem('cookies', true);
        setAccepted(true);
    }
    const handleYesClose = () => {
        acceptPolicy()
        setOpen(false);
    };//HANDLE DIALOG PRIVACY DECLARATION
    const handleNoClose = () => {
        setOpen(false)
        navigate('/about')
    }
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use LookAchoo location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" align='center'>
                        {userIP ? `Your Public IP address is: ${userIP}` : "Fetching IP Address..."}<br/>
                        LookAchoo uses the opensource and privacy-oriented <a href="https://www.ipify.org/" target="_blank">ipify</a> to attain this.
                        Your IP address will <Typography variant='button' style={{textDecoration: 'underline', fontWeight: '900'}}>not</Typography> be saved.
                        Through IP Geolocation LookAchoo leverages several services in tandem to consolidate air quality, weather, and covid data meant to augment your context awareness regarding what's tickling your nose right now.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="warning" onClick={handleNoClose}>No, I need more information</Button>
                    <Button variant="outlined" color="success" onClick={handleYesClose}>Yeah, alright</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Disclaimer