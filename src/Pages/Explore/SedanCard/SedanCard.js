import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';

const SedanCard = ({ sedan }) => {
    const { _id, img, name, engine, fuelType, gear, gearType, price } = sedan;
    const history = useHistory();
    const handlePurchasing = () => {

        history.push(`/purchase/${_id}`);

    }
    return (
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className="our-sedan-card" sx={{ maxWidth: 345, padding: "15px" }}>
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
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontWeight: 600, color: "#130f40" }}>
                        {name}
                    </Typography>
                    <Typography className="sedan-description" variant={'h6'}>
                        Engine:{engine}
                    </Typography>
                    <Typography className="sedan-description" variant={'h6'}>
                        Tranmission(Gear):{gear}/{gearType}
                    </Typography>
                    <Typography className="sedan-description" variant={'h6'}>
                        Fuel Type:{fuelType}
                    </Typography>

                    <Typography className="sedan-description" variant={'h6'}>
                        Fuel Type:{fuelType}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handlePurchasing}
                        className="btn-purchase" sx={{ margin: "0 auto", color: "white", transition: "0.6s" }}
                    >Purchase</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SedanCard;