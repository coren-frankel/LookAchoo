import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fontWeight } from '@mui/system';

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
                    <Typography>{children}</Typography>
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
                    <Tab label="LookAchoo & Privacy" {...a11yProps(1)} />
                    <Tab label="Attributions & Citations" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <span style={{fontWeight: 700}}>What is a sneeze?</span><br/>
                    A sneeze is a complex thing. It can partially be defined as "...a reflex excited by an irritation of the mucous membrane of the nose or, sometimes, by a bright light striking the eye."<sup>1</sup> As an involuntary action, it can be the source of great discomfort, and often the cause of a sneeze can seem mysterious. Sneezes, especially in succession can be due to exposure to allergens but they can also be a symptom of a viral infections like a cold, flu, or the Omicron variants of COVID-19.<sup>2</sup><br/>
                    <span style={{alignContent: 'start'}}>
                    <span style={{fontWeight: 700}}>Allergens Include:</span><br/>
                    <ul>
                        <li>Pollens:
                        <ul>
                            <li>Tree</li>
                            <li>Weed (especially Ragweed)</li>
                            <li>Grass</li>
                        </ul>
                        </li>
                        <li>Mold</li>
                        <li>Dust</li>
                    </ul>
                    </span>
                    <span style={{fontWeight: 700}}>
                    Other Irritants:</span><br/>
                    
                    <hr/> 
                    <sup>[1]</sup> "sneeze." Farlex Partner Medical Dictionary. 2012. Farlex 3 Oct. 2022 <a href="https://medical-dictionary.thefreedictionary.com/sneeze">https://medical-dictionary.thefreedictionary.com/sneeze</a><br/>
                    <sup>[2]</sup> “Allergies, Cold, Flu, or COVID-19? | Emerson Hospital.” Emerson Health, <a href="https://www.emersonhospital.org/articles/allergies-or-covid-19">www.emersonhospital.org/articles/allergies-or-covid-19</a>. Accessed 3 Oct. 2022.
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    LookAchoo was built to give you an expedient experience in discovering what real-time local conditions could be responsible for a ticklish nose. 
                    Under the hood of LookAchoo:
                    More Text
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    "Meow... meow" - Leap Day William
                </TabPanel>
            </SwipeableViews>
        </Box>
        </ThemeProvider>
    );
}
