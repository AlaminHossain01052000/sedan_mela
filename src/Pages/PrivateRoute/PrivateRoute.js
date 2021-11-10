import { LinearProgress } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    return (
        loading ? <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box> :
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
    );
};

export default PrivateRoute;