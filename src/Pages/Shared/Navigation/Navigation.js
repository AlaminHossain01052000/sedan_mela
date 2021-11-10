import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import MenuIcon from "@material-ui/icons/Menu";
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Navigation.css";

const Navigation = () => {
    const { user, logoutUser } = useAuth();
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
    const loggintOutUser = () => {
        logoutUser();
    }
    return (
        <header >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar id="app-bar">
                    <Container>
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "transparent" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>


                                <Link to="/home">
                                    <Button>Home</Button>
                                </Link>
                            </Box>
                            <Box id="nav-links">


                                {
                                    user.email ?
                                        <Link to="/">
                                            <Button onClick={loggintOutUser}>Logout</Button>

                                        </Link>
                                        :
                                        <Link to="/login">
                                            <Button>Login</Button>

                                        </Link>
                                }

                                <Link to="/register">
                                    <Button >Register</Button>

                                </Link>


                                <Link to="/explore">
                                    <Button>Explore</Button>

                                </Link>
                                <Link to="/dashboard">
                                    <Button>Dashboard</Button>

                                </Link>
                                <Typography sx={{ fontSize: "10px" }} variant={'h6'}>
                                    {
                                        user.email && <h1 style={{ color: "white" }}>{user.displayName}</h1>
                                    }
                                </Typography>

                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </header >
    );
};

export default Navigation;