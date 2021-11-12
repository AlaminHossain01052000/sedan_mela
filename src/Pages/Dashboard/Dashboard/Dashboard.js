import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import MakePayment from '../MakePayment/MakePayment';
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { logoutUser } = useAuth();
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {admin ? <Box> <List>

                <ListItem button>
                    <Link to={`${url}`}>Make an admin</Link>

                    <ListItemText />
                </ListItem>

            </List>

                <List>

                    <ListItem button>
                        <Link to={`${url}/manageOrders`}>Manage All Orders</Link>

                        <ListItemText />
                    </ListItem>

                </List>
                <List>

                    <ListItem button>
                        <Link to={`${url}/addProduct`}>Add a Product</Link>

                        <ListItemText />
                    </ListItem>

                </List>
                <List>

                    <ListItem button>
                        <Link to={`${url}/manageProducts`}>Manage All Products
                        </Link>

                        <ListItemText />
                    </ListItem>

                </List></Box> : <Box>
                <List>

                    <ListItem button>
                        <Link to={`${url}`}>My Orders</Link>

                        <ListItemText />
                    </ListItem>

                </List>
                <List>

                    <ListItem button>
                        <Link to={`${url}/payment`}>Make Payment</Link>

                        <ListItemText />
                    </ListItem>

                </List>
                <List>

                    <ListItem button>
                        <Link to={`${url}/review`}>Add a review</Link>

                        <ListItemText />
                    </ListItem>

                </List>



            </Box>}


            <List>
                <ListItem button>
                    <Link to="/home" onClick={logoutUser}>Logout</Link>

                    <ListItemText />
                </ListItem>

            </List>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link to="/home" style={{ color: "white" }}>Back to home <i class="fas fa-arrow-right"></i></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {admin ? <PrivateRoute exact path={path}>
                        <MakeAdmin></MakeAdmin>
                    </PrivateRoute> : <PrivateRoute exact path={path}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>}

                    <PrivateRoute exact path={`${path}/payment`}>
                        <MakePayment></MakePayment>
                    </PrivateRoute>
                    <PrivateRoute exact path={`${path}/review`}>
                        <AddReview></AddReview>
                    </PrivateRoute>
                    <AdminRoute exact path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
