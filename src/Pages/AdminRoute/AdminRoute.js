import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { Box } from '@mui/system';

import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';




const AdminRoute = ({ children, ...rest }) => {
    const { loading, user, admin } = useAuth();

    if (loading) {
        return <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                admin && user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;