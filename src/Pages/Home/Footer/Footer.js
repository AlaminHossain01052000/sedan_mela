import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Container sx={{ display: "flex", justifyContent: 'space-between' }}>
                <Box>
                    <Typography>SedanMela</Typography>
                </Box>
                <Box>
                    <Typography>&#169; All Rights Reserved to SedanMela</Typography>
                </Box>

                <Box>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram" style={{ margin: "0px 10px" }}></i>
                    <i className="fas fa-phone"></i>

                </Box>
            </Container>

        </footer>
    );
};

export default Footer;