import { TextField, Typography } from '@mui/material';
import React from 'react';
import "./DiscountBanner.css";
const DiscountBanner = () => {
    return (
        <div style={{}}>
            <div id="discount-bg">
                <Typography variant={'h6'} sx={{ color: "white" }}>
                    20% Discount on Any Purchasing of 01/01/2022
                </Typography>
                <Typography variant={'h6'} sx={{ color: "white" }}>
                    Register Now(Registration will end in 20/12/2021)
                </Typography>
                <TextField
                    label="Size"
                    id="filled-size-normal"
                    defaultValue="Normal"
                    variant="filled"
                />
            </div>
        </div>
    );
};

export default DiscountBanner;