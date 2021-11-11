import { Typography } from '@mui/material';
import React from 'react';
import "./DiscountBanner.css";
const DiscountBanner = () => {
    return (
        <div style={{ position: "relative" }}>
            <div id="discount-bg">

            </div>
            <div style={{ position: "absolute", top: "25%", left: "5%", backgroundColor: "rgba(254, 202, 87, 0.5)", height: "500px", width: "300px" }}>
                <div style={{ marginTop: "50px", padding: "10px" }}>
                    <Typography variant={'h6'} sx={{ color: "white" }}>
                        20% Discount on Any Purchasing of 01/01/2022
                    </Typography>
                    <Typography variant={'h6'} sx={{ color: "white" }}>
                        Register Now(Registration will end in 20/12/2021)
                    </Typography>
                    <button className="btn-register">Regsiter Now</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;