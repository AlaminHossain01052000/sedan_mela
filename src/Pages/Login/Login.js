import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../hooks/useFirebase';

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
    return (
        <div>
            <h1>Register Here</h1>
            <form onSubmit={handleUserLogIn}>

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

                <input type="submit" />
            </form>
            <button onClick={handleGoogleLogIn}>Google</button>
            <h2>Already Registered ? Click Here to Sign in</h2>
        </div>
    );
};

export default Login;