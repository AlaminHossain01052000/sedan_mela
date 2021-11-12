import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OurSedan from '../OurSedan/OurSedan';
import "./OurSedans.css";
const OurSedans = () => {
    const [sedans, setSedans] = useState([]);
    useEffect(() => {
        fetch("https://frozen-springs-46400.herokuapp.com/sedans")
            .then(res => res.json())
            .then(data => setSedans(data))
    }, [])
    return (
        <Box id="our-sedans">
            <Box>
                <Typography sx={{ fontSize: "40px", fontWeight: 500, marginBottom: "40px" }} variant={'h3'}>
                    Our <span style={{ color: "#30336b" }}>Sedans</span>
                    <hr style={{ width: "20%", border: "1px solid #30336b" }} />
                </Typography>
            </Box>
            <Container>
                <Grid container spacing={2}>
                    {
                        sedans.slice(0, 6).map(sedan => <OurSedan
                            key={sedan._id}
                            sedan={sedan}
                        ></OurSedan>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default OurSedans;