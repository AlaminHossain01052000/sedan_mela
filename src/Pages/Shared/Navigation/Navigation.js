import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import MenuIcon from "@material-ui/icons/Menu";
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Navigation.css";

const Navigation = () => {
    const { user } = useFirebase();
    const changeBackground = () => {
        const appBar = document.getElementById("app-bar");
        if (appBar) {
            if (window.scrollY >= 80) {
                document.getElementById("app-bar").style.backgroundColor = "rgba(0,0,0,0.5)";
            }
            else {
                // document.getElementById("app-bar").style.backgroundColor = "white";
                document.getElementById("app-bar").style.backgroundColor = "#B53471";
            }
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
                                <Link to="/home">
                                    <Button color="inherit">Home</Button>
                                </Link>


                                <Link to="/login">
                                    <Button color="inherit">Login</Button>

                                </Link>
                                <Link to="/register">
                                    <Button color="inherit">Register</Button>

                                </Link>
                                <Button color="inherit">Dashboard</Button>
                                {
                                    user.email && <h1 style={{ color: "white" }}>{user.displayName}</h1>
                                }
                                <Link to="/explore">
                                    <Button color="inherit">Explore</Button>

                                </Link>

                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </header >
    );
};

export default Navigation;