import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Dialog, DialogActions, DialogTitle, 
    DialogContent, DialogContentText,
    Slide, Button, Typography
} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
const Disclaimer = (props) => {
    const { userCoords } = props;
    const [accepted, setAccepted] = useState(false);
    const [open, setOpen] = useState(!accepted ? true : false)
    const navigate = useNavigate();
    // ON LOAD SEARCH SESSION FOR PREVIOUS 'consent'
    useEffect(() => {
        if (window.sessionStorage.getItem('consent')) {
            setAccepted(true);
            setOpen(false);
        }
    }, []);
    function acceptPolicy() {
        sessionStorage.setItem('consent', true);
        setAccepted(true);
    };
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
                        {userCoords ? `Your coordinates are: ${userCoords}` : "Awaiting permission to fetch user coordinates..."}<br/>
                        LookAchoo utilizes your browser's geolocation API to leverage several services in tandem. It consolidates air quality, weather, and covid data meant to augment your context awareness regarding what's tickling your nose right now.
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    {/* Style changes to add a 3rd option button */}
                    {/* style={{display: "flex", justifyContent: "space-between"}} */}
                    <Button variant="outlined" color="warning" onClick={handleNoClose}>No, I need more information</Button>
                    <Button variant="outlined" color="success" onClick={handleYesClose}>Yeah, alright</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Disclaimer