import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useFirebase from '../hooks/useFirebase';

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
    return (
        <div>
            <h1>Register Here</h1>
            <form onSubmit={handleUserRegistration}>
                <TextField
                    required
                    placeholder="Your Name"
                    type="text"
                    name="displayName"
                    onChange={handleOnChange}
                />
                <TextField
                    required
                    placeholder="Your Email"
                    type="email"
                    onChange={handleOnChange}
                    name="email"

                />
                <TextField
                    required
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}

                />
                <TextField
                    required
                    placeholder="Re-Type Your Password"
                    type="password"
                    name="rePassword"
                    onChange={handleMatchingPassword}
                />
                <input type="submit" />
            </form>
            <h2>Already Registered ? Click Here to Sign in</h2>
        </div>
    );
};

export default Register;