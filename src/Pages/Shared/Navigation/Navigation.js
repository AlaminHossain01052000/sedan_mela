import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import MenuIcon from "@material-ui/icons/Menu";
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Navigation.css";

const Navigation = () => {
    const { user, logoutUser } = useAuth();
    console.log(window.screen.width);
    const history = useHistory();
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
    const handleExplore = () => {
        history.push("/explore")
    }
    function myFunction() {
        var x = document.getElementById("nav-links");
        if (x.style.display === "none") {
            x.style.display = "blox";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <header width={1}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar id="app-bar">
                    <Container>
                        <Toolbar id="nav-toolbar" sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "transparent" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography className="brand-name" sx={{ fontSize: "20px" }}>SedanMela</Typography>
                                    <img src="https://i.ibb.co/vxFN1m6/auto-car-06-removebg-preview.png" width="80px" alt="" />
                                    <Button id="toggle-button" onClick={() => myFunction()}>Toggle</Button>
                                </Box>



                            </Box>
                            <Box id="nav-links">
                                <Link to="/home">
                                    <Button>Home</Button>
                                </Link>
                                <Link to="/register">
                                    <Button >Register</Button>

                                </Link>

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




                                <Link to="/dashboard">
                                    <Button>Dashboard</Button>

                                </Link>
                                <Typography sx={{ fontSize: "9px" }} disabled>
                                    {
                                        user.email && <h1 style={{ color: "white" }}>{user.displayName}</h1>
                                    }
                                </Typography>
                                <Button onClick={handleExplore} className="explore-button" variant="contained" sx={{ marginLeft: "10px", border: "1px solid #f6e58d" }}>Explore</Button>

                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </header >
    );
};

export default Navigation;