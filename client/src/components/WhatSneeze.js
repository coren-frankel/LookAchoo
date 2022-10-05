import React from 'react'
import { Card, Typography } from '@mui/material'

const WhatSneeze = () => {
    return (
        <>
            <span style={{ fontWeight: 700 }}>What is a sneeze?</span><br />
            A sneeze is a complex thing. It can partially be defined as "...a reflex excited by an irritation of the mucous membrane of the nose or, sometimes, by a bright light striking the eye."<sup>1</sup> As an involuntary action, it can be the source of great discomfort, and often the cause of a sneeze can seem mysterious. Sneezes, especially in succession can be due to exposure to allergens but they can also be a symptom of a viral infection like a cold, flu, or COVID-19. Uncertainty about whether you're experiencing allergies or symptoms of a virus is very common, but quite a lot of particulate matter can be responsible, including wildfire smoke that can travel from great distances to your nose.<sup>2</sup>
            <blockquote>
                "Allergic rhinitis (hay fever) is an allergic reaction to tiny particles in the air called allergens. When you breathe in allergens through your nose or mouth, your body reacts by releasing a natural chemical called histamine. Several indoor and outdoor allergens cause hay fever."<sup>3</sup>
            </blockquote>
            <Typography component='div' style={{display: 'flex'}}>
            <Card sx={{ color: '#283f3b', bgcolor: '#99ddc8', p: 3 }}>
                <span style={{ fontWeight: 700 }}>Allergens & Irritants Include:</span><br />
                <ul>
                    <li>Pollen:
                        <ul>
                            <li>Tree*</li>
                            <li>Weed*</li>
                            <li>Grass*</li>
                        </ul>
                    </li>
                    <li>Mold spores</li>
                    <li>Wildfire Smoke</li>
                    <li>Pet Dander</li>
                    <li>Dust mites</li>
                </ul>
                <small>
                    *Species quantity varies by region and season<br />
                </small>
            </Card>
            </Typography>
            <br />
            <span style={{ fontWeight: 700 }}>Allergy Season? For who?</span><br />
            Due to overlapping pollenation periods of flora, and the varying prevalence of dust and mold in virtually any habitable locale, those sensitive to multiple allergens can suffer from allergies year round, depending on local conditions. Smoke from wood or grass fires can multiply the severity of a reaction, and carry those pollen great distances as well. Sensitivity is different for everyone, and even exposure to indoor allergens including mold, dust, and pet dander can extend one's "allergy season".<sup>4</sup><br />
            <br />
            <span style={{ fontWeight: 700 }}>...Cold, Flu, or Covid?</span><br />
            Unlike allergic rhinitis, infectious rhinitis (common cold) is contaigous. Common colds and seasonal Flu tend to share sneezing as a symptom, and with the disovery of the  Omicron variants of COVID-19.<sup>5</sup> Early in infection it may be less clear whether it's allergic in nature, but if you're unsure visit <a href="https://www.emersonhospital.org/articles/allergies-or-covid-19">Allergies, Cold, Flu, or COVID-19?</a> for more information.
            <br />
            <hr />
            <span >
                <sup>[1]</sup> "sneeze." Farlex Partner Medical Dictionary. 2012. Farlex 3 Oct. 2022 <a href="https://medical-dictionary.thefreedictionary.com/sneeze">https://medical-dictionary.thefreedictionary.com/sneeze</a><br />
                <sup>[2]</sup> [Cedars-Sinai Staff]. “How Does Wildfire Smoke Affect Your Health?” Cedars-Sinai Blog, 30 Aug. 2019, <a href="https://www.cedars-sinai.org/blog/smoke-from-wildfires.html">www.cedars-sinai.org/blog/smoke-from-wildfires.html</a>.<br />
                <sup>[3]</sup> “Allergic Rhinitis (Hay Fever): Symptoms, Diagnosis and Treatment.” Cleveland Clinic, <a href="https://my.clevelandclinic.org/health/diseases/8622-allergic-rhinitis-hay-fever">my.clevelandclinic.org/health/diseases/8622-allergic-rhinitis-hay-fever</a>. Accessed 3 Oct. 2022.<br />
                <sup>[4]</sup> “How Long Does Allergy Season Last?” Cleveland Clinic, 9 Oct. 2020, <a href="https://health.clevelandclinic.org/how-long-does-allergy-season-last/" >health.clevelandclinic.org/how-long-does-allergy-season-last</a>.<br />
                <sup>[5]</sup> “Allergies, Cold, Flu, or COVID-19? | Emerson Hospital.” Emerson Health, <a href="https://www.emersonhospital.org/articles/allergies-or-covid-19">www.emersonhospital.org/articles/allergies-or-covid-19</a>. Accessed 3 Oct. 2022.
            </span>
        </>
    )
}

export default WhatSneeze