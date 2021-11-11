import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#ff6b6b", padding: "10px 0" }}>
            <Container id="footer-container" sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                <Box>
                    <Typography className="brand-name">SedanMela</Typography>
                </Box>
                <Box>
                    <Typography variant={'h6'} sx={{ color: "white" }}>&#169; All Rights Reserved to SedanMela</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-around' }}>
                    <i className="fab fa-facebook footer-icon"></i>
                    <i className="fab fa-instagram footer-icon" style={{ margin: "0px 10px" }}></i>
                    <i className="fas fa-phone footer-icon"></i>

                </Box>
            </Container>

        </footer>
    );
};

export default Footer;