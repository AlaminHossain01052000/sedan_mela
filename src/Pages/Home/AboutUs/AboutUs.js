import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>About Us</h1>


            <Container sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ textAlign: "left" }}>
                    <Typography variant={'h6'}>
                        "Sedan Mela is a result of our 5 years of hardwork .Currently our family is a people of 280 people.All of our family member one and only goal is your smile.Every steps we take ,every counter we count only for you .Your satisfaction is the first priority of us .Now our only goal is to bring all the sedan in our SedanMela between 2021 to 2025 .It is a greate opotunity for you to purchase your first or fourth whatever no sedan"
                    </Typography>
                </Box>
                <Box>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUdhfb_3lKYN_INqAWBnPvCUDcdiMYTSrrg&usqp=CAU" alt="" />
                </Box>
            </Container>

        </div>
    );
};

export default AboutUs;