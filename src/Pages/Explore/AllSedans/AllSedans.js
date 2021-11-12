import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SedanCard from '../SedanCard/SedanCard';

const AllSedans = () => {
    const [sedans, setSedans] = useState([]);
    useEffect(() => {
        fetch("https://frozen-springs-46400.herokuapp.com/sedans")
            .then(res => res.json())
            .then(data => setSedans(data))
    }, [])
    return (
        <div style={{ marginTop: "100px" }}>
            <Container>
                <Grid container spacing={2}>
                    {
                        sedans.map(sedan => <SedanCard
                            key={sedan._id}
                            sedan={sedan}
                        ></SedanCard>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AllSedans;