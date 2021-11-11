import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../hooks/useFirebase';
import "./Login.css";
const Login = () => {
    const [user, setUser] = useState({});
    const { loginUser, googleLogIn } = useFirebase();
    const history = useHistory();
    const location = useLocation();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser)
    }
    const handleUserLogIn = e => {
        e.preventDefault();
        loginUser(user.email, user.password, history, location);
        alert("User Login Successful")
    }
    const handleGoogleLogIn = () => {
        googleLogIn(history, location);
    }
    const handleGoToRegister = () => {
        history.push("/register")
    }
    return (
        <div className="sign-in-page">
            <h1 style={{ color: "#ff6b6b" }}>Login Here</h1>
            <form onSubmit={handleUserLogIn} className="login-form">

                <TextField
                    required
                    placeholder="Your Email"
                    type="email"
                    onChange={handleOnChange}
                    name="email"
                    className="input-field"
                />
                <TextField
                    required
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    className="input-field"

                />

                <input type="submit" className="btn-submit" />
            </form>

            <img onClick={handleGoogleLogIn} width="50px" src="https://i.ibb.co/RSDyLbz/download.png" alt="googleLogo" style={{ cursor: "pointer" }} />

            <h2 style={{ color: "#222f3e" }}>Already Registered ? Click <span onClick={handleGoToRegister} style={{ color: "#341f97", cursor: "pointer" }}>Here</span> to Sign in</h2>
        </div>
    );
};

export default Login;