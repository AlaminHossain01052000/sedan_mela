import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { Box } from '@mui/system';

import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';




const AdminRoute = ({ children, ...rest }) => {
    const { loading, user, admin } = useAuth();


    return (
        loading ? <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box> :
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