import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, Card, CardContent, Menu, MenuItem, Paper, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { AccessibilitySharp, AccountCircle, AdminPanelSettingsSharp, CurtainsClosedSharp, Dashboard, DesignServicesRounded, ListSharp, LocalActivityTwoTone, NotificationsActiveOutlined, Payment, PaymentSharp, RequestPageSharp, Shop, SupervisorAccountSharp, TvOffOutlined, UsbOffRounded } from '@mui/icons-material';
// import { AuthContext } from './AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { currentuser, getUserProfile, userLogout } from "../store/slices/AuthSlice";
import { LoadingButton } from '@mui/lab';
import { baseImagepath } from '../utils/Constant';

function SupervisorAppDrawer({ children }) {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { Loading, UserInfo, Status, userData } = useSelector((state) => state.AUTH)

    console.log("userData", userData?.data?.profileImage)

    const imagepath = `${baseImagepath}${userData?.data?.profileImage}`


    const [copen, csetOpen] = React.useState(false);
    const [dopen, dsetOpen] = React.useState(false);
    const [eopen, esetOpen] = React.useState(false);
    const [fopen, fsetOpen] = React.useState(false);


    function onLogoutHander() {
        dispatch(userLogout())
        navigate("/login")
    }



    const handleClick = () => {
        csetOpen(!copen);
    };

    const secondHandleClick = () => {
        dsetOpen(!dopen);
    };
    const thirdHandleClick = () => {
        esetOpen(!eopen);
    };

    const fourthHandleClick = () => {
        fsetOpen(!fopen);
    };



    const drawerWidth = 240;
    const { breakpoints, shape: { borderRadius } } = useTheme()
    // const { userLogout, UserInfo } = useContext(AuthContext)
    const [open, setOpen] = React.useState(true);
    const location = useLocation()
    // function onLogoutHander() {
    //     userLogout()
    // }

    const laptopSize = useMediaQuery(breakpoints.down('xl'))
    const isLarge = useMediaQuery(breakpoints.up('xl'))
    const matchUpMd = useMediaQuery(breakpoints.up('lg'))

    // Close the drawer when the screen size is tablet
    React.useEffect(() => {
        if (laptopSize) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [laptopSize])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ columnGap: 2 }}>
                    <Stack direction={'row'} flex={1} columnGap={1} alignItems={'center'} justifyContent={'start'}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={open ? handleDrawerClose : handleDrawerOpen}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ textTransform: "uppercase" }} noWrap component="div">
                            Supervisor
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'}>

                        <LoadingButton
                            onClick={onLogoutHander}
                            variant='contained' sx={{ bgcolor: 'error.main' }}
                            loading={Loading ? true : false}

                        >
                            Logout

                        </LoadingButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Avatar variant='circular'
                                sx={{ width: 30, height: 30 }}
                                alt={userData?.data?.name}
                                src={imagepath}
                            />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Stack sx={{ width: 200, padding: 3, rowGap: 2 }}>
                                <Card sx={{ justifyContent: 'center', display: "flex" }}>
                                    <CardContent>
                                        <Stack rowGap={2} alignItems={'center'}>
                                            <Tooltip
                                                title={userData?.data?.email}
                                            >
                                                <IconButton sx={{ p: 0 }}>
                                                    <Avatar variant='circular'
                                                        sx={{ width: 60, height: 'auto' }}
                                                        alt={userData?.data?.name}
                                                        src={imagepath}
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                            <Typography variant='body2'>
                                                {userData?.data?.email}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Box sx={{}}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Box>

                            </Stack>
                        </Menu>
                    </Stack>

                </Toolbar>
            </AppBar>
            <Drawer
                variant={matchUpMd ? 'persistent' : 'temporary'}
                open={open}
                onClose={handleDrawerClose}
                ModalProps={{ keepMounted: true }}
                sx={{
                    width: open ? drawerWidth : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth },
                }}
            >
                <Toolbar />

                <Box sx={{ overflow: 'auto', padding: '20px' }}>
                    <List
                        sx={{
                            // selected and (selected + hover) states
                            '&& .Mui-selected, && .Mui-selected:hover': {
                                bgcolor: 'primary.main',
                                // color: 'black',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'background.default',
                                },
                            },
                            // hover states 
                            '& .MuiListItemButton-root:hover': {
                                bgcolor: '',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'primary.main',
                                },
                                '&, & .ListItemText-root': {
                                    color: 'primary.main',
                                },
                            },

                        }}
                    >

                        <ListItemButton
                            sx={{ borderRadius: borderRadius, }}
                            LinkComponent={Link}
                            to='/'
                            onClick={() => isLarge ? null : setOpen(false)}
                            selected={location.pathname === '/'}

                        >
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItemButton>


                        <ListItemButton onClick={handleClick} sx={{ marginTop: '10px' }}>
                            <ListItemIcon>
                                <PaymentSharp />
                            </ListItemIcon>
                            <ListItemText primary="Payments" />
                            {copen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={copen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisorpaysuccessful'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisorpaysuccessful'}
                                >
                                    <ListItemIcon>
                                        <CheckOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Successfull Payments" />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisorpayunsuccessful'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisorpayunsuccessful'}
                                >
                                    <ListItemIcon>
                                        <ClearOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Unsuccessfull Payments" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={secondHandleClick} sx={{ marginTop: '10px' }}>
                            <ListItemIcon>
                                <AdminPanelSettingsSharp />
                            </ListItemIcon>
                            <ListItemText primary="User" />
                            {dopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={dopen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisoruseractive'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisoruseractive'}
                                >
                                    <ListItemIcon>
                                        <LocalActivityTwoTone />
                                    </ListItemIcon>
                                    <ListItemText primary="Active Users" />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisoruserinactive'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisoruserinactive'}
                                >
                                    <ListItemIcon>
                                        <TvOffOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary="Inactive Users" />
                                </ListItemButton>
                            </List>
                        </Collapse>



                        <ListItemButton onClick={thirdHandleClick} sx={{ marginTop: '10px' }}>
                            <ListItemIcon>
                                <DesignServicesRounded />
                            </ListItemIcon>
                            <ListItemText primary="Services" />
                            {eopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={eopen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisorallservice'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisorallservice'}
                                >
                                    <ListItemIcon>
                                        <ListSharp />
                                    </ListItemIcon>
                                    <ListItemText primary="All Services" />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisorrequestedservice'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisorrequestedservice'}
                                >
                                    <ListItemIcon>
                                        <RequestPageSharp />
                                    </ListItemIcon>
                                    <ListItemText primary="Requested Services" />
                                </ListItemButton>


                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisoracceptservice'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisoracceptservice'}
                                >
                                    <ListItemIcon>
                                        <AccessibilitySharp />
                                    </ListItemIcon>
                                    <ListItemText primary="Accepted services" />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisordeniedservice'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisordeniedservice'}
                                >
                                    <ListItemIcon>
                                        <CurtainsClosedSharp />
                                    </ListItemIcon>
                                    <ListItemText primary="Denied Services" />
                                </ListItemButton>


                            </List>
                        </Collapse>


                        <ListItemButton onClick={fourthHandleClick} sx={{ marginTop: '10px' }}>
                            <ListItemIcon>
                                <SupervisorAccountSharp />
                            </ListItemIcon>
                            <ListItemText primary="Supervisor" />
                            {fopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={fopen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisoruserdetails'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisoruserdetails'}
                                >
                                    <ListItemIcon>
                                        <CheckOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="User Detail" />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisorpaymentdetails'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisorpaymentdetails'}
                                >
                                    <ListItemIcon>
                                        <ClearOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Payment detail" />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ pl: 4, border: '2px solid #fff', borderRadius: '8px' }}
                                    LinkComponent={Link}
                                    to='/supervisoruserrequest'
                                    onClick={() => isLarge ? null : setOpen(false)}
                                    selected={location.pathname === '/supervisoruserrequest'}
                                >
                                    <ListItemIcon>
                                        <ClearOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Payment detail" />
                                </ListItemButton>
                            </List>
                        </Collapse>



                    </List>

                </Box>

            </Drawer>

            <Box component="main"
                sx={{
                    flexGrow: 1, p: 3,
                }}
            >
                <Toolbar />

                {children}

            </Box>

        </Box>
    )
}

export default SupervisorAppDrawer