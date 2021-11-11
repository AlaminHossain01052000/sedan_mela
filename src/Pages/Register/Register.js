import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useFirebase from '../hooks/useFirebase';
import "./Register.css";
const Register = () => {
    const [userInfo, setUserInfo] = useState({});
    const [rePassword, setRePassword] = useState("");
    const history = useHistory();
    const { registerNewUser } = useFirebase();

    const handleMatchingPassword = e => {
        setRePassword(e.target.value);
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...userInfo };
        newUser[field] = value;
        setUserInfo(newUser);
    }
    const handleUserRegistration = e => {
        e.preventDefault();
        if (userInfo.password === rePassword) {
            console.log(userInfo);
            registerNewUser(userInfo.displayName, userInfo.email, userInfo.password, history);
            alert("Registered Successfully");
        }
    }
    const handleGoToLogin = () => {
        history.push("/login")
    }
    return (
        <div className="register-page">
            <h1>Register Here</h1>
            <form onSubmit={handleUserRegistration} className="register-form">
                <TextField
                    required
                    placeholder="Your Name"
                    type="text"
                    name="displayName"
                    onChange={handleOnChange}
                    className="input-field"
                />
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
                <TextField
                    required
                    placeholder="Re-Type Your Password"
                    type="password"
                    name="rePassword"
                    onChange={handleMatchingPassword}
                    className="input-field"
                />
                <input type="submit" className="btn-submit" />
            </form>
            <h2>Already Registered ? Click
                <span onClick={handleGoToLogin} style={{ color: "#341f97", cursor: "pointer" }}> Here </span>
                to Sign in</h2>
        </div>
    );
};

export default Register;