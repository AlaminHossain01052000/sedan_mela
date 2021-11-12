import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./OurSedan.css";

const OurSedan = ({ sedan }) => {
    const { user } = useFirebase();
    const history = useHistory();

    const { img, name, engine, fuelType, gear, gearType, price, _id } = sedan

    const gotoPurchase = id => {
        history.push(`/purchase/${id}`);
    }
    return (
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className="our-sedan-card" sx={{ maxWidth: 345, padding: "15px", backgroundColor: "#c7ecee", border: "1px solid #f6e58d" }}>
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
                <CardContent sx={{ textAlign: "left" }}>
                    <Typography sx={{ textAlign: "center", fontWeight: 600, color: "#130f40" }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography className="sedan-description" variant={'h6'}>
                        Engine : {engine}
                    </Typography>
                    <Typography className="sedan-description" variant={'h6'}>
                        Tranmission(Gear) : {gear}/{gearType}
                    </Typography>
                    <Typography className="sedan-description" variant={'h6'}>
                        Fuel Type : {fuelType}
                    </Typography>

                    <Typography className="sedan-description" variant={'h6'}>
                        Fuel Type : {fuelType}
                    </Typography>
                </CardContent>
                <CardActions>

                    <button size="small" onClick={() => gotoPurchase(_id)} className="btn-purchase" sx={{ margin: "0 auto" }}>Purchase Now</button>



                </CardActions>
            </Card>
        </Grid>
    );
};

export default OurSedan;