import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const ViewOrder = ({ order }) => {
    const { user } = useAuth();

    const { img, name, engine, fuelType, gear, gearType, price } = order.productInfo;
    console.log(order);
    const orderId = order._id;
    const email = user.email;
    const handleDeletingOrder = () => {
        const confirmDeleting = window.confirm("Are You Sure Want To Delete ?");
        if (confirmDeleting) {
            fetch(`http://localhost:5000/purchasedSedan/All/${orderId}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount === 1) {
                        alert("Order Deleted Successfully");
                        window.location.reload()
                    }
                })
        }

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
                    <Typography color="text.secondary">
                        Status:{order.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleDeletingOrder}>Delete</Button>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default ViewOrder;