import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import "./ViewOrder.css";
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
                <CardContent sx={{ textAlign: "left" }}>
                    <Typography sx={{ textAlign: "center", fontWeight: 600, color: "#130f40" }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography className="sedan-description">
                        Engine:{engine}
                    </Typography>
                    <Typography className="sedan-description">
                        Tranmission(Gear):{gear}/{gearType}
                    </Typography>
                    <Typography className="sedan-description">
                        Fuel Type:{fuelType}
                    </Typography>

                    <Typography className="sedan-description">
                        Fuel Type:{fuelType}
                    </Typography>
                    <Typography className="sedan-description">
                        Status:{order.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button className="btn-delete" onClick={handleDeletingOrder}>Delete</button>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default ViewOrder;