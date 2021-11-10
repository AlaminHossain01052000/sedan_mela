import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OurSedan from '../OurSedan/OurSedan';
import "./OurSedans.css";
const OurSedans = () => {
    const [sedans, setSedans] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/sedans")
            .then(res => res.json())
            .then(data => setSedans(data))
    }, [])
    return (
        <Box>
            <Box>
                <Typography variant={'h3'}>
                    Our Sedans
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