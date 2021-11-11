import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./AboutUs.css";
const AboutUs = () => {
    return (
        <div style={{ margin: "40px 0" }}>
            <Typography sx={{ fontSize: "40px", fontWeight: 500, marginBottom: "40px" }} variant={'h3'}>
                About <span style={{ color: "#30336b" }}>Us</span>
                <hr style={{ width: "20%", border: "1px solid #30336b" }} />
            </Typography>


            <Container id="about-us-container" sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ textAlign: "left" }}>
                    <Typography variant={'h6'} className="about-us-description">
                        "Sedan Mela is a result of our 5 years of hardwork .Currently our family is a people of 280 people.All of our family member one and only goal is your smile.Every steps we take ,every counter we count only for you .Your satisfaction is the first priority of us .Now our only goal is to bring all the sedan in our SedanMela between 2021 to 2025 .It is a greate opotunity for you to purchase your first or fourth whatever no sedan"
                    </Typography>
                </Box>
                <Box>
                    <img className="about-us-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUdhfb_3lKYN_INqAWBnPvCUDcdiMYTSrrg&usqp=CAU" alt="aboutUs" style={{ border: "2px solid #feca57" }} />
                </Box>
            </Container>

        </div>
    );
};

export default AboutUs;