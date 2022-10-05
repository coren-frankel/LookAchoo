import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WhatSneeze from './WhatSneeze';
import Privacy from './Privacy';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = createTheme({
        palette: {//Toying with MUI Theme Customization and Chosen Color scheme
            primary: {
                main: '#99ddc8',
                contrastText: '#283f3b'
            },
            secondary: {
                main: '#95bf74',
            },
            neutral: {
                main: '#659b5e',
            },
            info: {
                main: '#283f3b',
                contrastText: '#99ddc8'
            },
            alternate: {
                main: '#556f44',
                contrastText: '#283f3b'
            },
        },
    });
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minWidth: 280, maxWidth: 800, bgcolor: "#95bf74", m: 'auto' }}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor='primary'
                        sx={{ bgcolor: "#659b5e" }}
                        variant="fullWidth"
                        aria-label="info tabs"
                    >
                        <Tab label="What's in a Sneeze?" {...a11yProps(0)} />
                        <Tab label="Process & Privacy" {...a11yProps(1)} />
                        <Tab label="LookAtme" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                {/* <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                > */}
                    <TabPanel value={value} index={0} dir={theme.direction} align="start">
                        <WhatSneeze />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Privacy />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Hello there. My name is Coren "Kern" Frankel and I am the architect of LookAchoo. I'm a software developer in the early stages of his new career, and this is one of my first portfolio builds. This section is kind of a placeholder for something later down the line. For now I'm going to treat it of a list of features that I hope to incorporate and refine over time.
                        <br />
                        <Typography component={'div'} align="left">
                        <span style={{ fontWeight: 700 }} >Probably Coming Soon:</span>
                        <ul>
                            <li>Mold & Dust Risk Calculator/Algorithm</li>
                            <li>Local Cold/Flu Statistics</li>
                            <li>Conditional Rendering of Allergen Risk by locale season</li>
                            <li>Greater specificity of pollen species</li>
                            <li>A toggle/button to shift through backgrounds</li>
                            <li>Maybe make this a list in my database that users like you can contribute to? 🤪</li>
                        </ul>
                        </Typography>
                    </TabPanel>
                {/* </SwipeableViews> */}
            </Box>
        </ThemeProvider>
    );
}
