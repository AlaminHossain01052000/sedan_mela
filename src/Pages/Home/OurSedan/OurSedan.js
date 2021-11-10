import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./OurSedan.css";

const OurSedan = ({ sedan }) => {
    const { user } = useFirebase();
    const history = useHistory();

    const { img, name, engine, fuelType, gear, gearType, price, _id } = sedan
    const handlePurchasing = () => {
        const email = user.email;
        const body = { ...sedan, email };
        fetch(`http://localhost:5000/purchasedSedan`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const gotoPurchase = id => {
        history.push(`/purchase/${id}`);
    }
    return (
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ maxWidth: 345, padding: "15px" }}>
                <Box id="sedan-img-container">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        id="sedan-img"
                        image={img}
                    />
                    <Box id="sedan-price">
                        <Typography sx={{ color: "white", fontWeight: 500 }}>
                            &#2547; {price} Lakh
                        </Typography>
                    </Box>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography color="text.secondary">
                        Engine:{engine}
                    </Typography>
                    <Typography color="text.secondary">
                        Tranmission(Gear):{gear}/{gearType}
                    </Typography>
                    <Typography color="text.secondary">
                        Fuel Type:{fuelType}
                    </Typography>

                    <Typography color="text.secondary">
                        Fuel Type:{fuelType}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button size="small" onClick={() => gotoPurchase(_id)}>Purchase Now</Button>



                </CardActions>
            </Card>
        </Grid>
    );
};

export default OurSedan;