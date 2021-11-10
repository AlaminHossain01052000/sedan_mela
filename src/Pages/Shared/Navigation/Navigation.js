import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import MenuIcon from "@material-ui/icons/Menu";
import React from 'react';
import "./Navigation.css";

const Navigation = () => {
    const changeBackground = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 80) {
            document.getElementById("app-bar").style.backgroundColor = "rgba(0,0,0,0.5)";
        }
        else {
            document.getElementById("app-bar").style.backgroundColor = "#B53471";
        }

    }
    window.addEventListener("scroll", changeBackground);

    return (
        <header >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar id="app-bar">
                    <Container>
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "transparent" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>


                                <Typography variant="h6" component="div">
                                    home
                                </Typography>
                            </Box>
                            <Box id="nav-links">
                                <Button color="inherit">Home</Button>
                                <Button color="inherit">Login</Button>
                                <Button color="inherit">Register</Button>
                                <Button color="inherit">Dashboard</Button>
                                <Button color="inherit">Alamin</Button>
                                <Button color="inherit">Explore</Button>

                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </header >
    );
};

export default Navigation;